import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Posts from "../../pages/Posts";
import Reg from "../../pages/Reg";

import Card from "../Card";
import data from "../../data.json"; 

const Main = () => {
    return (
    <main>
        {/* <div className="cards-container">{data.map(el => <Card tags={el.tags} name={el.author.name} email={el.author.email} about={el.author.about} text={el.text} key={el._id} />)}
        </div> */}
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/reg" element={<Reg/>}/>
            </Routes>
    </main>
    )
}

export default Main;

