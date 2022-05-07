import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import "./index.css";
import {UserCtx} from "../../context/UserContext";

const Header = () => {
    const {user} = useContext(UserCtx);
    return (
        <header>
            <Logo/>
            {/* <p>Search</p> */}
            {/* <p>Главная</p>
            <p>Личный кабинет</p> */}
            <nav>
                <Link to="/">Главная страница</Link>
                {/* <Link to="/reg">БЛичный кабинет</Link> */}
                <Link to={user ? "/profile" : "/signin"}>Личный кабинет</Link>
                <Link to="/posts">Пост</Link>
            </nav>
        </header>
    )
}

export default Header;