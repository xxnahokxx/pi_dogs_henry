import React, { useState } from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import doggyNotFound from "../../utils/images/silueta_dog.png"

function Card(props) {

    const modoOscuro = useSelector(state => state.darkMode)
    const link = "https://cdn2.thedogapi.com/images/";
    const [errorImage, setErrorImage] = useState(false);
    const [errorImage2, setErrorImage2] = useState(false);

    const handlerErrorImage = () => {
        setErrorImage(true);
    }

    const handlerErrorImage2 = () => {
        setErrorImage2(true);
    }



    const imagen = () => {

        if (props.image === undefined) {
            return <img className={style.front} src={doggyNotFound} alt={props.name} />
        }

        if (!errorImage) {
            return <img className={style.front} src={props.image} alt={props.name} onError={handlerErrorImage} />
        } else if (!errorImage2) {
            return <img className={style.front} src={`${link}${props.image}.jpg`} alt={props.name} onError={handlerErrorImage2} />
        } else {
            return <img className={style.front} src={`${link}${props.image}.png`} alt={props.name} />
        }
    }


    return (
        <div className={modoOscuro ? style.cardDark : style.cardLight}>
                {imagen()}
            <div className={style.back}>
                <Link to={`/dogs/${props.id}`}>
                <h2>{props.name}</h2>
                <h3 className={style.subTitle}>Weight:</h3>
                <p className={style.weight}>{props.weight} Kg</p>
                <h3 className={style.subTitle}>Temperaments:</h3>
                <p className={style.temperament}>{props.temperament}</p>
                <h5 className={style.id}>#{props.id}</h5>
            </Link>
            </div>
        </div>
    )
}

export default Card;
