import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./index.css";

const Header = () => {
    return (
        <header>
            <Logo/>
            {/* <p>Search</p> */}
            {/* <p>Главная</p>
            <p>Личный кабинет</p> */}
            <nav>
                <Link to="/">Главная страница</Link>
                <Link to="/reg">Личный кабинет</Link>
                <Link to="/posts">Пост</Link>
            </nav>
        </header>
    )
}

export default Header;