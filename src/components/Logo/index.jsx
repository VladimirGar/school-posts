import React from "react";
import logo from "./img/logo.svg";

const Logo = () => {
    return (
        <a href="/" className="logo">
            <img  alt="SchoolPost" src={logo} className="logo__pic"/>
        </a>
    )
}

export default Logo;