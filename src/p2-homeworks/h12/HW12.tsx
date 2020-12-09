import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'sky', 'night'];

function HW12() {
    const theme = useSelector<AppStoreType,string>(store => store.theme.mainTheme) // useSelector
    const dispatch = useDispatch();
    let [mainTheme, setMainTheme] = useState(theme)

    const onChangeCallback = (theme: string) => {
        let index = themes.indexOf(theme)
        setMainTheme(themes[index])
        dispatch(changeThemeAC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <div className={s[theme + '-text']}>
                <SuperRadio
                    options={themes}
                    value={mainTheme}
                    onChangeOption={onChangeCallback}
                />
            </div>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
