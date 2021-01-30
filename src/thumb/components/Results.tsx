import {ThumbState} from "../ThumbState";
import {copiesLowerBound, copiesUpperBound, spellReturnsToHand, numberOfCastsIfFirstTailsIsPicked} from "../selectors";

interface ResultsProps {
    state: ThumbState
}

export const Results = ({state}: ResultsProps) => {
    const {
        numberOfThumbs,
        numberOfKrarks,
        coinFlips
    } = state
    return <div>

        <table>
            <thead></thead>
            <tbody></tbody>
            <tr>
                <td>Spell returns to hand</td>
                <td>{spellReturnsToHand(state) ? "Yes" : "No"}</td>
            </tr>
            <tr>
                <td>Number of casts if first tails is picked</td>
                <td>{numberOfCastsIfFirstTailsIsPicked(state)}</td>
            </tr>
            <tr>
                <td>Amount of copies (at least)</td>
                <td>{copiesLowerBound(state)}</td>
            </tr>
            <tr>
                <td>Amount of copies (at most)</td>
                <td>{copiesUpperBound(state)}</td>
            </tr>

        </table>
    </div>
}


