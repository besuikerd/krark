import {Controls} from "./Controls";
import {ThumbState} from "../ThumbState";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Action, performSimulation, reset, setNumberOfKrarks, setNumberOfThumbs} from "../action";
import {KrarkTable} from "./KrarkTable";
import {Results} from "./Results";

interface ConnectedThumbProps {

}

interface ThumbProps extends ConnectedThumbProps{
    state: ThumbState
}

export const Thumb = ({state, performSimulation, reset, setNumberOfThumbs, setNumberOfKrarks}: ThumbProps & DispatchProps) => <div>
    <Controls
        performSimulation={performSimulation}
        reset = {reset}
        numberOfKrarks={state.numberOfKrarks}
        numberOfThumbs={state.numberOfThumbs}
        setNumberOfKrarks={setNumberOfKrarks}
        setNumberOfThumbs={setNumberOfThumbs}
    />
    {
        state.coinFlips.length !== 0 ? <>
            <Results state={state}/>
            <KrarkTable coinFlips={state.coinFlips}/>
        </> : null
    }
</div>


interface DispatchProps {
    setNumberOfThumbs: (n: number) => void
    setNumberOfKrarks: (n: number) => void
    performSimulation: () => void
    reset: () => void
}

function mapStateToProps(state: ThumbState): ThumbProps {
    return {
        state
    }
}


function mapDispatchToProps(dispatch: Dispatch<Action>, ownProps: ThumbProps): DispatchProps {
    return {
        setNumberOfThumbs: (n: number) => dispatch(setNumberOfThumbs(n)),
        setNumberOfKrarks: (n: number) => dispatch(setNumberOfKrarks(n)),
        performSimulation: () => dispatch(performSimulation()),
        reset: () => dispatch(reset())
    }
}

export const ThumbComponent = connect(mapStateToProps, mapDispatchToProps)(Thumb)