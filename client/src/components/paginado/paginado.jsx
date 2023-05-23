import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import style from "./paginado.module.css"
import Card from "../card/Card"

const itemsPerPage = 8;

const Pagination = (data) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
            <div>
                <div className={style.container}>
                    {currentData.map(({ id, image, name, temperament, weight, height, life_span }) => (
                        <Card key={id} id={id} name={name} image={image} temperament={temperament} weight={weight} height={height} life_span={life_span} />
                    ))}
                </div>
                <ReactPaginate
                    pageCount={Math.ceil(data.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={style.paginadoContainer}
                    activeClassName={style.activo}
                />

            </div>
        </>
    );
};

export default Pagination;
