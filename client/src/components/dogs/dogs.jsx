import React from "react";
import style from "./dogs.module.css";
import Card from "../card/Card";


function Dogs({ dogs }) {
    return (
        <>
            <div className={style.content}>
                <div className={style.title}>Hola estas en Dogs</div>
                <div className={style.templateDogs}>
                    {dogs.map(({ id, image, name, temperament, weight, height, life_span }) => <Card key={id} id={id} name={name} image={image} temperament={temperament} weight={weight} height={height} life_span={life_span} />)}
                </div>
            </div>
        </>
    );
}

export default Dogs;
