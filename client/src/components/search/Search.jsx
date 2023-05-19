import { connect } from "react-redux";
import { allDogs, getNameDogs, reset } from "../../redux/actions";
import { useState } from "react";
import style from "./search.module.css"

function Search({ busqueda, reset, allDogs }) {

    const [raza, setRaza] = useState("");
    const handleInputChange = (event) => {
        const { value } = event.target;
        setRaza(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setRaza("");
    };

    const handleAll = (raza) => {
        setRaza("");
        reset();
        allDogs();
    }




    return (
        <>
            <div className={style.content}>

                <button onClick={() => handleAll(raza)}  >All</button>
                <form action="" onSubmit={handleSubmit} onChange={() => busqueda(raza)}>
                    <input placeholder="Busca por raza..." type="search" onChange={handleInputChange} value={raza} />
                    {/* <button onClick={() => busqueda(raza)}  >search</button> */}
                </form>

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
