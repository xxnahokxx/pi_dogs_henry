import React, { useEffect, useState } from "react";
import style from "./dogs.module.css";
import Card from "../card/Card";
import { connect, useDispatch, useSelector } from "react-redux";
import { allDogs, peso } from "../../redux/actions";
import usePagination from 'react-paginate';


function Dogs({ search, allDogs }) {

    const dispatch = useDispatch();
    const result = useSelector(state => state.filtros)
    console.log(result);

    useEffect(() => {
        dispatch(peso());
    }, [])

    const condicion = () => {
        if (result.length > 0) {
            return search.length === 0 ?
                result.map(({ id, image, name, temperament, weight, height, life_span }) => <Card key={id} id={id} name={name} image={image} temperament={temperament} weight={weight} height={height} life_span={life_span} />)
                :
                result.map(({ id, image, name, temperament, weight, height, life_span }) => <Card key={id} id={id} name={name} image={image} temperament={temperament} weight={weight} height={height} life_span={life_span} />)
        }
        if (result.length === 0) {
            return allDogs.map(({ id, image, name, temperament, weight, height, life_span }) => <Card key={id} id={id} name={name} image={image} temperament={temperament} weight={weight} height={height} life_span={life_span} />)
        }
    }

    return (
        <>
            <div className={style.content}>
                <h1 className={style.title}>Hola estas en Dogs</h1>
                <div className={style.templateDogs}>

                    {
                        condicion()
                    }

                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        allDogs: state.allDogs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dogsAll: dispatch(allDogs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);
