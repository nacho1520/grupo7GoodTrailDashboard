import React from "react";
import Panels from "../../components/Panels";
import TotalProductsByCategory from "../../components/TotalProductsByCategory";
import LastExperience from "../../components/LastExperience/index";

const Main = () => {
    return(
        <div>
            <Panels />
            <TotalProductsByCategory />
            <LastExperience />
        </div>
    );
}

export default Main;