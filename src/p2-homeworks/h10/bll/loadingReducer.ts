const initState = {
    loading: false
};
export type StateType = {
    loading: boolean
}
type ActionType = LoadingType
export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "SET-LOADING": {
            return {...state, loading: action.isLoading};
        }
        default: return state;
    }
};
type LoadingType = {
    type: "SET-LOADING",
    isLoading: boolean
}
export const loadingAC = (isLoading: boolean): LoadingType => {
    return {
        type: "SET-LOADING",
        isLoading
    }
}; // fix any