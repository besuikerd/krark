import {createSelector} from "reselect";
import {Heads, Tails, ThumbState} from "./ThumbState"

const coinFlipsSelector =  ({coinFlips}: ThumbState) => coinFlips

export const spellReturnsToHand = createSelector(coinFlipsSelector, coinFlips =>
    coinFlips.filter(flips => flips.filter(flip => flip === Tails).length !== 0).length !== 0
)

export const copiesLowerBound = createSelector(coinFlipsSelector, coinFlips =>
    coinFlips.filter(flips => flips.filter(flip => flip === Heads).length === flips.length).length
)

export const copiesUpperBound = createSelector(coinFlipsSelector, coinFlips =>
    coinFlips.filter(flips => flips.filter(flip => flip === Heads).length !== 0).length
)