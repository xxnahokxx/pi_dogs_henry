import React from "react";
import style from "./dogs.module.css";
import { connect, useSelector } from "react-redux";
import { allDogs} from "../../redux/actions";
import Pagination from "../paginado/paginado";


function Dogs({ search, allDogs }) {

    const result = useSelector(state => state.filtros)
    const temFilter = useSelector(state => state.dogsFilter)

    const condicionDato = () => {
        if (result.length > 0) {
            return temFilter.length === 0
                ? result
                : temFilter
        }
        if (result.length === 0) {
            return temFilter.length === 0
                ? allDogs
                : temFilter
        }
    }
    const data = condicionDato();

    return (
        <>
            <div className={style.content}>
                <h1 className={style.title}>Hola estas en Dogs</h1>
                <div className={style.templateDogs}>

                    {
                        Pagination(data)
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
