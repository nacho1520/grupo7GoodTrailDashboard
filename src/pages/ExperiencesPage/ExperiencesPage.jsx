import React from "react";
import ExperiencesTable from "../../components/ExperiencesTable/ExperiencesTable";
import './ExperiencePage.css';

const ExperiencesPage = () => {
    return(
        <div className="experience-container">
            <div className="title-container">
                <h1 className="experiences-title">Experiencias</h1>
            </div>
            <ExperiencesTable />
        </div>
    );
}

export default ExperiencesPage;