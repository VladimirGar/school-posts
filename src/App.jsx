import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import {UserCtx, UserValue} from "./context/UserContext";



const App = () => {
    return (
        <UserCtx.Provider value={UserValue}>
            <div className="container">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </UserCtx.Provider>
    )
}

export default App;