import React, { useEffect, useState } from "react";
import style from "./dogs.module.css";
import Card from "../card/Card";
import { connect } from "react-redux";
import { allDogs } from "../../redux/actions";
import usePagination from 'react-paginate';


function Dogs({ search, allDogs }) {

    // console.log(allDogs);
    // console.log(search);

    const [currentPage, setCurrentPage] = useState(0);

    // const { pageCount, pageRangeDisplayed, marginPagesDisplayed, onPageChange } = usePagination({
    //     pageCount: 10,
    //     pageRangeDisplayed: 3,
    //     marginPagesDisplayed: 1,
    //     onPageChange: ({ selected }) => setCurrentPage(selected),
    // });


    return (
        <>
            <div className={style.content}>
                <h1 className={style.title}>Hola estas en Dogs</h1>
                <div className={style.templateDogs}>

                    {
                        search.length === 0 ?
                            allDogs.map(({ id, image, name, temperament, weight, height, life_span }) => <Card key={id} id={id} name={name} image={image} temperament={temperament} weight={weight} height={height} life_span={life_span} />)
                            :
                            search.map(({ id, image, name, temperament, weight, height, life_span }) => <Card key={id} id={id} name={name} image={`https://cdn2.thedogapi.com/images/${image}.jpg`} temperament={temperament} weight={weight} height={height} life_span={life_span} />)
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
