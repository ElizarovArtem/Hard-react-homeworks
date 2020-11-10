import {ItemType} from "./tests/homeWorkReducer.test";

type SortActionType = {
    type: "sort"
    payload: "up" | "down"
}
type CheckActionType = {
    type: "check"
    payload: number
}
type ActionTypes = SortActionType | CheckActionType

export const homeWorkReducer = (state: Array<ItemType>, action: ActionTypes): Array<ItemType> => {
    switch (action.type) {
        case "sort": {
            if(action.payload === "up"){
                let newState = state.sort((a,b) => {
                    let nameA = a.name.toLowerCase()
                    let nameB = b.name.toLowerCase()

                    if(nameA > nameB){
                        return 1
                    }else if(nameA < nameB){
                        return -1
                    }else{
                        return 0
                    }
                })
                return [...newState]

            }else if(action.payload === "down"){
                let newState = state.sort((a,b) => {
                    let nameA = a.name.toLowerCase()
                    let nameB = b.name.toLowerCase()

                    if(nameA < nameB){
                        return 1
                    }else if(nameA > nameB){
                        return -1
                    }else{
                        return 0
                    }
                })
                return [...newState]
            }
            return state
        }
        case "check": {
            let newState = state.filter(i => i.age > action.payload)
            return  newState
        }
        default: return state
    }
};