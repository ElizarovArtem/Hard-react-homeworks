import {loadingReducer} from "./loadingReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {hw13Reducer} from "../../h13/homework13Reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    homework13: hw13Reducer
});

export const store = createStore(reducers, applyMiddleware(thunk));


export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
