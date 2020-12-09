const CHANGE_THEME = "CHANGE_THEME";

export type InitStateType = typeof initState
const initState = {
    mainTheme: "some"
};

export const themeReducer = (state:InitStateType = initState, action: ChangeThemeACType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return { ...state, mainTheme: action.newTheme }
        }
        default: return state;
    }
};

type ChangeThemeACType = {
    type: "CHANGE_THEME",
    newTheme: string
}
export const changeThemeAC = (newTheme: string): ChangeThemeACType => {
    return {
        type: CHANGE_THEME,
        newTheme
    }
}; // fix any