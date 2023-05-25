import React from "react";
import style from "./card.module.css";
import doggyNotFound from "../../utils/images/silueta_dog.png"
import { useSelector } from "react-redux";

function Card(props) {
    const temperamentos = useSelector(state => state.temperaments)
    const modoOscuro = useSelector(state => state.darkMode)

    const tempName = () => {

        const data = props.temperament.map(el => {
            return temperamentos.filter(ele => {
                return ele.id === Number(el) && ele.names
            })
        })
        return data.flat(Infinity).map(el => el.names).join(", ");
    }

    const nombres = tempName();

    return (
        <div className={modoOscuro ? style.cardDark : style.cardLight}>
            <h2>{props.name}</h2>
            { }
            <img className={style.image} src={props.image} alt="" onError={(event) => { event.target.onerror = null; event.target.src = doggyNotFound}}/>
            <h3 className={style.subTitle}>Weight:</h3>
            <p className={style.weight}>{props.weight} Kg</p>
            <h3 className={style.subTitle}>Temperaments:</h3>
            <p className={style.temperament}>{nombres}</p>
            <h5 className={style.id}>#{props.id}</h5>
        </div>
    )
}

export default Card;
