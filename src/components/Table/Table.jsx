import React from "react";
import './Table.css';

const Table = ({ header, data, isForExp }) => {

    const bodyForExperience = () => {
        return(
            <tbody>
                {data.map((exp, index) => {
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
        );
    }

    const bodyForUser = () => {
        return(
            <tbody>
                {data.map((user, index) => {
                    return(
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    {header.map((head) => {
                        return(<th>{head}</th>);
                    })}
                </tr>
            </thead>
            {isForExp ? bodyForExperience() : bodyForUser()}
        </table>     
    );
}

export default Table;