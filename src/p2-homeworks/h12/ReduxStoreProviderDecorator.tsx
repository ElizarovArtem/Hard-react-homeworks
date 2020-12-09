import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {themeReducer} from "./bll/themeReducer";
import React from "react";
import {AppStoreType} from "../h10/bll/store";

const reducers = combineReducers({
    theme: themeReducer
})

const initialDecoratorState = {
    theme:{
        mainTheme: "sky"
    },
    loading: {
        loading: false
    }
}

export const store = createStore(reducers, initialDecoratorState as AppStoreType)

export const ReduxStoreProviderDecorator = (story: any) => {
    return(
        <Provider store={store}>
            {story()}
        </Provider>
    )
}