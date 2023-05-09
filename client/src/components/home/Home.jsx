import React from "react";
import style from "./home.module.css"
import Doggy from "../../utils/images/fondo.jpg"

export default function Home() {
    return (
        <>
            <div className={style.fondo}>
                <img src={Doggy} alt="perrito" className={style.doggy} />
                    <h1 className={style.title}>¡Bienvenido a nuestra página de perros!</h1>
                    <button className={style.button}>Bienvenido</button>
            </div>
        </>
    );
}

