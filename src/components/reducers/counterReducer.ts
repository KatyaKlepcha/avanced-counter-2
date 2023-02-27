const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 0
};

type initPropsType = typeof initialState

type ActionsType = ReturnType<typeof increaseCountAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof setStarValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setCountAC>;

export const counterReducer = (state: initPropsType = initialState, action: ActionsType): initPropsType => {
    switch (action.type) {

        case 'SET-COUNT': {
            return {
                ...state,
                count: state.startValue
            }
        }
        case 'INCREASE-COUNT': {
            return {
                ...state,
                count: state.count + 1
            }
        }

        case 'SET-START-VALUE': {
            return {
                ...state,
                startValue: action.startValue
            }
        }

        case 'SET-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.maxValue
            }
        }

        case 'RESET-COUNT': {
            return {
                ...state,
                count: action.startValue
            }
        }

        default:
            return state
    }
}

export const setCountAC = (count: number) => ({
    type: 'SET-COUNT',
    count
}) as const

export const increaseCountAC = () => ({
    type: 'INCREASE-COUNT',
}) as const

export const setStarValueAC = (startValue: number) => ({
    type: 'SET-START-VALUE',
    startValue
}) as const

export const setMaxValueAC = (maxValue: number) => ({
    type: 'SET-MAX-VALUE',
    maxValue
}) as const

export const resetCountAC = (startValue: number) => ({
    type: 'RESET-COUNT',
    startValue
}) as const



