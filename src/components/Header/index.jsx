import React from "react";
import Logo from "../Logo";
import "./index.css";

const Header = () => {
    return (
        <header>
            <Logo/>
            {/* <p>Search</p> */}
            <p>Главная</p>
            <p>Remix Docs</p>
            <nav>Nav</nav>
        </header>
    )
}

export default Header;