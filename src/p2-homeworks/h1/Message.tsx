import React from "react";
import s from "./Message.module.css"

type messageData = {
    avatar: string
    name: string
    message: string
    time: string
};

function Message(props: messageData) {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.messageArea}>
                <div className={s.messageItems}>
                    <span>{props.name}</span>
                    <p>{props.message}</p>
                </div>
                <div className={s.time}>
                    <span>{props.time}</span>
                </div>
            </div>

        </div>
    );
}

export default Message;
