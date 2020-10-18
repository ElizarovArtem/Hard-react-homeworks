import React from "react";

function Error404() {
    const numberStyle = {
        marginLeft: "800px",
        fontSize: "10em"
    }
    const notFoundStyle = {
        marginLeft: "400px",
        fontSize: "10em",
        color: "red"
    }
    const catStyle = {
        marginLeft: "500px",
        fontSize: "10em",
        color: "green"
    }
    const pageStyle = {

        backgroundColor: "purple"
    }
    return (
        <div style={pageStyle}>
            <div style={numberStyle}>404</div>
            <div style={notFoundStyle}>Page not found!</div>
            <div style={catStyle}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
