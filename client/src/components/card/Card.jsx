import React, { useState } from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";

function Card(props) {

    const [errorImage, setErrorImage] = useState(false);

    const handlerErrorImage = () => {
        setErrorImage(true);
    }

    

    return (
        <div className={style.card}>
            <h2>{props.name}</h2>
            <Link to={`/dogs/${props.id}`}>
            <img className={style.image} src={props.image} alt={props.name} onError={handlerErrorImage} />
            </Link>
            <h3 className={style.subTitle}>Weight:</h3>
            <p className={style.weight}>{props.weight} lb</p>
            <h3 className={style.subTitle}>Temperaments:</h3>
            <p className={style.temperament}>{props.temperament}</p>
            <h5 className={style.id}>#{props.id}</h5>
        </div>
    )
}

export default Card;
