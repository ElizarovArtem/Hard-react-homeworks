import React, {useState} from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {restoreState, saveState} from "./localStorage/localStorage";
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>("");
    const [onMouseEnter, setOnMouseEnter] = useState<boolean>(false);

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
         setValue(restoreState("editable-span-value", value));
    };

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            {/*<div className={onMouseEnter ? s.message : s.doubleClick}>DoubleClick for changes</div>*/}
            <div className={s.superSpan} onMouseEnter={() => setOnMouseEnter(true)} onMouseLeave={() => setOnMouseEnter(false)}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : "enter text..."}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    );
}

export default HW6;
