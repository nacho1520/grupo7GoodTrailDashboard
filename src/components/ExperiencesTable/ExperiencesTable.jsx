import React, { useState, useEffect } from "react";
import './ExperienceTable.css';
import useFetch from "../hooks/useFetch";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import ReactPaginate from "react-paginate";

const ExperiencesTable = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useFetch(`/api/products?page=${page}`, 'experiences'); 

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
                        {data && data.length > 0  && data.map((exp, index) => {
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
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={5}
                    onPageChange={changePage}
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