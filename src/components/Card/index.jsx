import React from "react";
import "./index.css";

const Card = ({text}) => {
    return (
        <div className="card">
            {/* <div className="card__title">Бэтмен: Возвращение</div> */}
            <div className="card__img"></div>
            {/* <div className="card__userName">maxim_91@inbox.ru</div> */}
            <div className="card__text">{text}</div> 
            <div className="card__price">
                <p>Сменить другое устройство на правом предплечье</p>
            </div>
        </div>
    )
}

export default Card;