import React from "react";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairTypeInAffairPropsType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

export type AffairTypeInAffairPropsType = {
    _id: number
    name: string
    priority: string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};// need to fix

    return (
        <div>
            {props.affair.name}, находится в приоритете {props.affair.priority}

            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
