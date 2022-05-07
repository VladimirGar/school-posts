import React from "react";
import Main from "../components/Main";
import api from "../Api";
import Card from "../components/Card";
import data from "../data.json"; 

const Home = () => {
    return (
        <>
            {/* <h1>Главная страница</h1> */}
            {/* <Main/> */}
            <div className="cards-container">{data.map(el => <Card tags={el.tags} name={el.author.name} email={el.author.email} about={el.author.about} text={el.text} key={el._id} />)}
            </div>
        </>
    )
}

export default Home;