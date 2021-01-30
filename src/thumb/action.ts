export type Action = SetNumberOfThumbs | SetNumberOfKrarks | PerformSimulation | Reset


const SetNumberOfKrarks = "SetNumberOfKrarks"
type SetNumberOfKrarks = {
    type: typeof SetNumberOfKrarks,
    value: number
}
export function setNumberOfKrarks(value: number): SetNumberOfKrarks {
    return {
        type: SetNumberOfKrarks,
        value
    }
}


const SetNumberOfThumbs = "SetNumberOfThumbs"
type SetNumberOfThumbs = {
    type: typeof SetNumberOfThumbs
    value: number
}
export function setNumberOfThumbs(value: number): SetNumberOfThumbs {
    return {
        type: SetNumberOfThumbs,
        value
    }
}

const PerformSimulation = "PerformSimulation"
type PerformSimulation = {
    type: typeof PerformSimulation
}
export function performSimulation(): PerformSimulation {
    return {
        type: PerformSimulation
    }
}

const Reset = "Reset"
type Reset = {
    type: typeof Reset
}
export function reset(): Reset {
    return {
        type: Reset
    }
}