import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import style from "./paginado.module.css"
import { useSelector } from 'react-redux';



const Pagination = (props) => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const totalPage = Math.ceil(data.length / itemsPerPage)
    const modoOscuro = useSelector(state => state.darkMode);

    useEffect(() => {
        setData(props.dato)
    }, [props.dato])


    function goToNextPage() {
        if (currentPage < totalPage) {
            setCurrentPage(Number(currentPage) + 1);
        }
    }

    function goToPreviousPage() {
        if (currentPage > 1) {
            setCurrentPage(Number(currentPage) - 1);
        }
    }

    const handleChange = (event) => {
        const { value } = event.target
        setCurrentPage(value);
    }

    const reset = () => {
        setCurrentPage(1);
    }

    useEffect(() => {
        reset();
    },[data])

    return (
        <>
            <div>
                <div className={style.container}>
                    {
                        data.slice(firstIndex, lastIndex).map(({ id, image, name, temperament, weight, height, life_span }) => (<Card key={id} id={id} name={name} image={image} temperament={temperament} weight={weight} height={height} life_span={life_span} />))
                    }
                </div>
                <div className={style.paginadoContainer}>
                    <button className={modoOscuro ? style.buttonDark : style.buttonLight} onClick={goToPreviousPage}>prev</button>
                    <div className={style.position}>
                        Página <input className={style.page} type="text" onChange={handleChange} value={currentPage} /> de {Math.ceil(data.length / itemsPerPage)}
                    </div>
                    <button className={modoOscuro ? style.buttonDark : style.buttonLight} onClick={goToNextPage}>Next</button>
                </div>
            </div>
        </>
    )

}

export default Pagination;
