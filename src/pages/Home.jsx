import React from "react";
import Main from "../components/Main";
import api from "../Api";
import Card from "../components/Card";
import data from "../data.json"; 
import "../components/Card/index.css";
import Auth from "../components/Auth";
import Posts from "./Posts";

const Home = () => {
    return (
        <>
            {/* <Auth/> */}
            <div className="main-banner">
                <h3>Главная / Все посты</h3>
                <h1>Добро пожаловать на мою страничку</h1>
                <h3>Делитесь своими мыслями</h3>
                <button  className='createButton' onClick={()=>{navigate('create')}}><h3>Создать пост</h3></button>
            </div>
            {/* <Main/> */}
            <div className="cards-container">{data.map(el => <Card tags={el.tags} name={el.author.name} email={el.author.email} about={el.author.about} text={el.text} key={el._id} />)}
            </div>
        </>
    )
}

export default Home;