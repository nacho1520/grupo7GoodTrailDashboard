import React, { useState, useEffect } from "react";
import './ExperienceTable.css';
import useFetch from "../hooks/useFetch";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import ReactPaginate from "react-paginate";

const ExperiencesTable = () => {
    const [page, setPage] = useState(0);
    const { data, isLoading, fetchData } = useFetch(`/api/products?page=${page}`); 

    useEffect(() => {
        fetchData();
        console.log(page);
    }, [page])

    const changePage = ({ selected }) => {
        setPage(selected);
    }

    const showTable = () => {
        return(
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.experiences.length > 0  && data.experiences.map((exp, index) => {
                            return(
                                <tr key={index}>
                                    <td>{exp.id}</td>
                                    <td>{exp.name}</td>
                                    <td>{exp.description}</td>
                                    <td>{exp.category.category_name}</td>
                                </tr>
                            );}) 
                        }
                    </tbody>
                </table>
                <ReactPaginate 
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    pageCount={data && data.pages}
                    onPageChange={changePage}
                    containerClassName={'pagination-container'}
                    previousLinkClassName={'previos-btn'}
                    nextLinkClassName={'next-btn'}
                    disabledClassName={'disabled-btn'}
                    activeClassName={'active-btn'}
                />
            </div>
        );
    }

    return(
        <div className="container">
            { isLoading ? <LoaderSpinner /> : showTable() }
        </div>
    );
}

export default ExperiencesTable;