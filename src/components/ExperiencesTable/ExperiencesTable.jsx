import React, { useState, useEffect } from "react";

const ExperiencesTable = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch("/api/products?page=1")
            .then(response => response.json())
            .then(data => {
                setExperiences(data.experiences);
            })
            .catch(error => console.log(error))
    }, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {experiences.map((exp, index) => {
                        return(
                            <tr>
                                <td>{exp.name}</td>
                                <td>{exp.description}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ExperiencesTable;