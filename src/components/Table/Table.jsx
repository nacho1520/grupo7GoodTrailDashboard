import React from "react";
import './Table.css';

const Table = ({ header, data, isForExp }) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    {header.map((head) => {
                        return(<th>{head}</th>);
                    })}
                </tr>
            </thead>
            <tbody>
                {data.experiences.map((exp, index) => {
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
    );
}

export default Table;