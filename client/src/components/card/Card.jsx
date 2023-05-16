import React from "react";
import style from "./card.module.css";

function Card(props) {
    return (
        <div className={style.card}>
            <h2>{props.name}</h2>
            <img className={style.image} src={props.image} alt={props.name} />
            <h3 className={style.subTitle}>Weight:</h3>
            <p className={style.weight}>{props.weight} lb</p>
            <h3 className={style.subTitle}>Temperaments:</h3>
            <p className={style.temperament}>{props.temperament}</p>
        </div>
    )
}

export default Card;
