import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Card from "./components/Card";
import Main from "./components/Main";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Reg from "./pages/Reg";


// const data = ["word", "legendary", "kaif", "word1", "legendary1", "kaif1", "23123", "sdfsdf"];

// const dataCards = data.map((pet, i) => <Card text={pet} key={i}/>);

const App = () => {
    return (
        <div className="container">
            <Header/>
            {/* <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/reg" element={<Reg/>}/>
            </Routes> */}
            {/* <Card/> */}
            {/* {dataCards} */}
            {/* <Logo/> */}
            {/* <h1>Руддщghjf</h1>  */}
            <Main/>
            <Footer/>
        </div>
    )
}

export default App;