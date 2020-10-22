import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./../../p1-main/m1-ui/u1-app/App.module.css"


function Header() {

    return (
        <div className={s.sss}>
             <div className={s.links}>
                <div><NavLink activeClassName={s.active}  to={"/junior"} >JUNIOR</NavLink></div>
                <div><NavLink activeClassName={s.active}  to={"/juniorPlus"} >JUNIOR-PLUS</NavLink></div>
                <div><NavLink activeClassName={s.active}  to={"/pre-junior"} >PRE-JUNIOR</NavLink></div>
            </div>
        </div>
    );
}

export default Header;