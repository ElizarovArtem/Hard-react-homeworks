import React, {ChangeEvent} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeMessageTC, changeStatusAC} from "./homework13Reducer";
import s from "./HW13.module.css"

function Request() {
    let message = useSelector<AppStoreType, string>(store => store.homework13.reqMessage)
    let checked = useSelector<AppStoreType, boolean>(store => store.homework13.checked)
    const dispatch = useDispatch()

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeStatusAC(e.currentTarget.checked))
    const onRequest = () => dispatch(changeMessageTC(checked))

    return (
        <div>
            <SuperButton onClick={onRequest}> Submit </SuperButton>
            <input type={"checkbox"} checked={checked} onChange={onChangeStatus}/>
            <div
                className={`${s.startStyle} 
            ${message === "Some server error" ? s.error : ""} 
            ${message === "...всё ок)" ? s.messageArea : ""}`}
            >
                <span>{message}</span>
            </div>
        </div>
    );
}

export default Request;