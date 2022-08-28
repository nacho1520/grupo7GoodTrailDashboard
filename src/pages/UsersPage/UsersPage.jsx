import React from "react";
import UsersTable from '../../components/UsersTable/UsersTable';
import './UsersPage.css';

const UsersPage = () => {
    return(
        <div className="experience-container">
            <div className="title-container">
                <h1 className="experiences-title">Usuarios</h1>
            </div>
            <UsersTable />
        </div>
    );
}

export default UsersPage;