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
            <nav>
                <Link to="/">Главная страница</Link>
                <Link to={user ? "/profile" : "/signin"}>Личный кабинет</Link>
                <Link to="/posts">Пост</Link>
                {/* <button  className='createButton' onClick={()=>{navigate('create')}}>Создать пост</button> */}
            </nav>
        </header>
    )
}

export default Header;