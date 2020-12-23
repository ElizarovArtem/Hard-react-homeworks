import {Dispatch} from "redux";
import {AppStoreType} from "../h10/bll/store";
import {requestAPI} from "./RequestAPI";

type InitialStateType = {
    checked: boolean
    reqMessage: string
}
let initialState = {
    checked: false,
    reqMessage: "Tap submit for request"
}

type ActionsType = ReturnType<typeof changeStatusAC> |  ReturnType<typeof changeMessageAC>
export const hw13Reducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {
    switch (action.type){
        case "CHANGE_STATUS":{
            return { ...state, checked: action.checked}
        }
        case "CHANGE_MESSAGE":{
            return {...state, reqMessage: action.message}
        }
        default:
            return state
    }
}

export const changeStatusAC = (checked: boolean) => {
    return { type: "CHANGE_STATUS", checked } as const
}
export const changeMessageAC = (message: string) => {
    return { type: "CHANGE_MESSAGE", message } as const
}

export const changeMessageTC = (checked: boolean) => {
    return (dispatch: Dispatch, getState: () => AppStoreType) => {

        const checked = getState().homework13.checked

        requestAPI.authTest(checked)
            .then(res => {
                dispatch(changeMessageAC(res.data.errorText))
            })
            .catch(err => {
                dispatch(changeMessageAC("Some server error"))
            })
    }
}