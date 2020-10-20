import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./../../p1-main/m1-ui/u1-app/App.module.css"

type HeaderPropsType = {
    filter: string
    setFilter: (value: string) => void
}

function Header(props: HeaderPropsType) {
    let [collapse, setCollapse] = useState(true)

    return (
        <div className={s.sss}>
            <div className={s.menu} onClick={() => setCollapse(!collapse)}>Menu</div>
             <div className={collapse ? s.links : s.linksOpen}>
                <div><NavLink className={props.filter === "junior" ? s.active : ""} to={"/junior"} onClick={() => props.setFilter("junior")}>JUNIOR</NavLink></div>
                <div><NavLink className={props.filter === "juniorPlus" ? s.active : ""} to={"/juniorPlus"} onClick={() => props.setFilter("juniorPlus")}>JUNIOR-PLUS</NavLink></div>
                <div><NavLink className={props.filter === "pre-junior" ? s.active : ""} to={"/pre-junior"} onClick={() => props.setFilter("pre-junior")} >PRE-JUNIOR</NavLink></div>
            </div>
        </div>
    );
}

export default Header;