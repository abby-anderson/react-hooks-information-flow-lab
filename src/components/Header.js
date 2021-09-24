import React from "react";

//have to pass the onclick function as prop from app
function Header ({mode, onDarkModeClick}) {

    return (
    <header >
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
            {mode} Mode
        </button>
    </header>
    )
}

export default Header;