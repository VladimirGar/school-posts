import React from "react";
import "./index.css";

const Card = ({name, about, tags, email, text}) => {
    return (
        <div className="card">
            <div className="card__userName">
                <h3>{name}</h3></div>
            <div className="card__about">{about}</div>
            <div className="card__img"></div>
            <div className="card__tags">tags: {tags}</div> 
            <div className="card__email">email: {email}</div>
            <div className="card__text">
                {text}
                {/* <p>Сменить другое устройство на правом предплечье</p> */}
            </div>
        </div>
    )
}

export default Card;