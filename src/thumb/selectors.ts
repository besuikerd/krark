import {createSelector} from "reselect";
import {Heads, Tails, ThumbState} from "./ThumbState"
import {foldl} from "./functional";

const coinFlipsSelector =  ({coinFlips}: ThumbState) => coinFlips

export const spellReturnsToHand = createSelector(coinFlipsSelector, coinFlips =>
    coinFlips.filter(flips => flips.filter(flip => flip === Tails).length !== 0).length !== 0
)

export const numberOfCastsIfFirstTailsIsPicked = createSelector(coinFlipsSelector, coinFlips => {
    let [tailsPicked, result] = foldl(coinFlips,
        ([tailPicked, numberOfCopies], cur) => {
            const containsHeads = cur.filter(flip => flip == Heads).length !== 0
            const containsTails = cur.filter(flip => flip == Tails).length !== 0
            if(containsTails && !tailPicked) {
                return [true, numberOfCopies];
            } else if(containsHeads) {
                return [tailPicked, numberOfCopies + 1];
            } else {
                return [tailPicked, numberOfCopies];
            }

        },
        [false, 0]
    )
    return result + (tailsPicked ? 0 : 1);
}
)

export const copiesLowerBound = createSelector(coinFlipsSelector, coinFlips =>
    coinFlips.filter(flips => flips.filter(flip => flip === Heads).length === flips.length).length
)

export const copiesUpperBound = createSelector(coinFlipsSelector, coinFlips =>
    coinFlips.filter(flips => flips.filter(flip => flip === Heads).length !== 0).length
)

