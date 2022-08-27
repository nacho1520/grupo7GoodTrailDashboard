import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import ExperiencesPage from '../../pages/ExperiencesPage/ExperiencesPage';
import UsersPage from "../../pages/UsersPage/UsersPage";

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/experiences" element={<ExperiencesPage />}></Route>
            <Route path="/users" element={<UsersPage />}></Route>
        </Routes>
    );
}

export default Router;