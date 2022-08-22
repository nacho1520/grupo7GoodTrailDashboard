import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import ExperiencesPage from '../../pages/ExperiencesPage/ExperiencesPage';
import LastExperiencePage from '../../pages/LastExperiencePage/LastExperiencePage';

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/experiences" element={<ExperiencesPage />}></Route>
            <Route path="/lastExperience" element={<LastExperiencePage />}></Route>
        </Routes>
    );
}

export default Router;