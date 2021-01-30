import {initialState, performSimulation, ThumbState} from "./ThumbState";
import {Action} from "./action";

export function reducer(state: ThumbState = initialState, action: Action): ThumbState {
    console.log('reducing', action)
    switch(action.type){
        case "SetNumberOfKrarks":
            return {
                ...state,
                numberOfKrarks: action.value
            }
        case "SetNumberOfThumbs":
            return {
                ...state,
                numberOfThumbs: action.value
            }
        case "PerformSimulation":
            return performSimulation(state)
        case "Reset":
            return initialState
    }
    return state;
}