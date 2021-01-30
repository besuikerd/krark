export interface ThumbState {
    numberOfKrarks: number
    numberOfThumbs: number
    coinFlips: CoinFlip[][]
}

export const Heads = 'Heads'
export type Heads = typeof Heads
export const Tails = 'Tails'
export type Tails = typeof Tails

export type CoinFlip = Heads | Tails



function repeat<T>(n: number, f: () => T): T[]{
    return Array(n).fill(null).map(_null => f())
}

export const coinFlip:  () => CoinFlip = () => Math.random() > 0.5 ? Heads : Tails
export const coinFlips: (n: number) => CoinFlip[] = n => repeat(n, coinFlip)

export function performSimulation(state: ThumbState): ThumbState {
    return {
        ...state,
        coinFlips: repeat(state.numberOfKrarks, () => coinFlips(Math.pow(2, state.numberOfThumbs)))
    }
}

export const initialState: ThumbState = {
    numberOfKrarks: 2,
    numberOfThumbs: 0,
    coinFlips: []
}