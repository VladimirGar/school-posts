import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import {UserCtx, UserValue} from "./context/UserContext";



const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    const userHandler = (id) => {
        setUser(id);
        localStorage.setItem("user", id);
    }
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const tokenHandler = (data) => {
        setToken(data);
        localStorage.setItem("token", data);
    }
    return (
        <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler}}>
            <div className="container">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </UserCtx.Provider>
    )
}

export default App;