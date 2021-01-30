import {Dispatch} from "redux";
import {Action} from "../action";

interface ControlProps {
    numberOfKrarks: number
    numberOfThumbs: number
    performSimulation: () => void
    reset: () => void
    setNumberOfThumbs: (n: number) => void
    setNumberOfKrarks: (n: number) => void
}


export const Controls = ({performSimulation, reset, numberOfKrarks, setNumberOfKrarks, numberOfThumbs, setNumberOfThumbs}: ControlProps) => <div>
    <button onClick={reset}>Reset</button>
    <div>
        <label>Number of Krarks</label>
        <Counter number={numberOfKrarks} setValue={setNumberOfKrarks}/>
    </div>
    <div>
        <label>Number of Thumbs</label>
        <Counter number={numberOfThumbs} setValue={setNumberOfThumbs}/>
    </div>
    <button onClick={performSimulation}>Run</button>
</div>

interface CounterProps {
    number: number
    setValue: (n: number) => void
}

const Counter = ({number, setValue}: CounterProps) =>
    <div>
        <button onClick={() => setValue(Math.max(0, number - 1))}>-</button>
        {number}
        <button onClick={() => setValue(number + 1)}>+</button>
    </div>

