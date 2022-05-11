import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Posts from "../../pages/Posts";
import Reg from "../../pages/Reg";
import Profile from "../../pages/Profile";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";




const Main = () => {
    return (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/posts" element={<Posts/>}/> */}
            <Route path="/posts/:id" element={<Posts/>}></Route>
            <Route path="/reg" element={<Reg/>}/>

            <Route path="/profile" element={<Profile/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </main>
    )
}

export default Main;

