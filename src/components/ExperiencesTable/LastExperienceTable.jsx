import React, { useState, useEffect } from "react";
import './ExperienceTable.css';
import useFetch from "../hooks/useFetch";

const LastExperienceTable = () => {
    const { data, isLoading } = useFetch("/api/products?page=1", 'experiences'); 

    return(
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0  && data.map((exp, index) => {
                        let numero = data.length 
                        if(exp.id == numero){
                            return(
                                <tr key={index}>
                                    <td>{exp.name}</td>
                                    <td>{exp.description}</td>
                                </tr>
                            );
                        } 
                    }) 
                    }
                </tbody>
            </table>
            {isLoading && <div>Loading...</div>}
        </div>
    );
}

export default LastExperienceTable;