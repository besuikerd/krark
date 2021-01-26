import {CoinFlip} from "../ThumbState";
import {KrarkRow} from "./KrarkRow";

interface KrarkTableProps {
    coinFlips: CoinFlip[][]
}

export const KrarkTable = ({coinFlips}: KrarkTableProps) =>
    <table>
        <thead></thead>
        <tbody>
        {
            coinFlips.map((coinFlips, i) => <KrarkRow key={i} coinFlips={coinFlips}/>)
        }
        </tbody>
    </table>