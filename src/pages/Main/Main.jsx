import React from "react";
import Panels from '../../components/Panels/Panels';
import TotalProductsByCategory from '../../components/TotalProductsByCategory/TotalProductsByCategory';
import LastExperience from '../../components/LastExperience/LastExperience';
import './main.css'

const Main = () => {
    return(
        <div>
            <Panels />
            <div className="main">
            <TotalProductsByCategory />
            <LastExperience />
            </div>
        </div>
    );
}

export default Main;