import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            // add NavLinks
            <NavLink to={"/junior"}>JUNIOR</NavLink>
            <NavLink to={"/pre-junior"}>PRE-JUNIOR</NavLink>
        </div>
    );
}

export default Header;
