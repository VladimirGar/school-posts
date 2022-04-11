import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

const data = ["word", "legendary", "kaif", "word1", "legendary1", "kaif1"];

const dataCards = data.map((post, i) => <Card text={post} key={i}/>);

const App = () => {
    return (
        <div className="container">
            <Header/>
            {/* <Card/> */}
            {dataCards}
            {/* <Logo/> */}
            {/* <h1>Руддщghjf</h1>  */}
            <Footer/>

        </div>
    )
}

export default App;