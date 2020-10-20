import React, {useState} from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import s from "./../../p1-main/m1-ui/u1-app/App.module.css"

export function HW5() {
    let[filter, setFilter] = useState("pre-junior")

    return (
        <div className={s.h5}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header filter={filter} setFilter={setFilter}/>

            <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
