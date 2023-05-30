import { connect, useSelector } from "react-redux";
import { allDogs, getNameDogs, reset } from "../../redux/actions";
import { useState } from "react";
import style from "./search.module.css"
import coment from "../../utils/images/notificacion2.png"

function Search({ busqueda, reset, allDogs }) {

    const [raza, setRaza] = useState("");
    const [onError, setOnError] = useState(false);
    const error = useSelector(state => state.search);
    console.log(error);
    const handleInputChange = (event) => {
        const { value } = event.target;
        setRaza(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setRaza("");
        if (error.length === 0) {
            setOnError(true);
        }
    };

    const handleAll = (raza) => {
        setRaza("");
        reset();
        allDogs();

    }

    const handleClick = () => {
        setOnError(false);
        reset();
    }

    const modoOscuro = useSelector(state => state.darkMode);


    return (
        <>
            <div className={modoOscuro ? style.blackMode : style.lightMode}>
                <div className={style.contentInput}>
                    <button className={style.button} onClick={() => handleAll(raza)}  >All</button>
                    <form action="" onSubmit={handleSubmit} onChange={() => busqueda(raza)}>
                        <input className={style.input} placeholder="Busca por raza..." type="search" onChange={handleInputChange} value={raza} />
                        {/* <button onClick={() => busqueda(raza)}  >search</button> */}
                    </form>
                </div>

                {onError && <>
                    <div className={style.errorModal}>
                        <img src={coment} alt="" />
                        <p>Perro no encontrado error 404</p>
                        <button onClick={handleClick}>ok</button>
                    </div>
                </>}

            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        busqueda: (raza) => dispatch(getNameDogs(raza)),
        reset: () => dispatch(reset()),
        allDogs: () => dispatch(allDogs()),
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
