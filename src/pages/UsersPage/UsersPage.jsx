import React from "react";
import UsersTable from '../../components/UsersTable/UsersTable';

const UsersPage = () => {
    return(
        <div className="experience-container">
            <div className="title-container">
                <h1 className="experiences-title">Experiencias</h1>
            </div>
            <UsersTable />
        </div>
    );
}

export default UsersPage;