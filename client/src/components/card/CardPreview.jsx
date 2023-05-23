import React, { useState } from "react";
import style from "./card.module.css";
import doggyNotFound from "../../utils/images/silueta_dog.png"
import { useSelector } from "react-redux";

function Card(props) {
    const temperamentos = useSelector(state => state.temperaments)


    const tempName = () => {

        const data = props.temperament.map(el => {
            return temperamentos.filter(ele => {
                return ele.id === Number(el) && ele.name
            })
        })

        return data.flat(Infinity).map(el => el.name)

    }

    const nombres = tempName();

    console.log(nombres);

    return (
        <div className={style.card}>
            <h2>{props.name}</h2>
            <img className={style.image} src={props.image} alt="" />
            <h3 className={style.subTitle}>Weight:</h3>
            <p className={style.weight}>{props.weight} lb</p>
            <h3 className={style.subTitle}>Temperaments:</h3>
            <p className={style.temperament}>{nombres.toString()}</p>
            <h5 className={style.id}>#{props.id}</h5>
        </div>
    )
}

export default Card;
