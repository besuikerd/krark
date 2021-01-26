import {CoinFlip} from "../ThumbState";

interface KrarkRowProps {
    coinFlips: CoinFlip[]
}

export const KrarkRow = ({coinFlips}: KrarkRowProps) =>
    <tr>
        {
            coinFlips.map((coinFlip, i) => <td key={i}>{coinFlip.slice(0,1)}</td>)
        }
    </tr>