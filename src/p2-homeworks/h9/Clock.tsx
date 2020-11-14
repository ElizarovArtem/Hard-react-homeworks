import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<string>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            // setDate
            let now = new Date().toLocaleTimeString(); // 11:02:48
            setDate(now)
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    };
    const onMouseLeave = () => {
        // close
        setShow(false)
    };

    const stringTime = new Date().toLocaleTimeString(); // fix with date
    const stringDate =  new Date().toLocaleDateString(); // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.clock}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
