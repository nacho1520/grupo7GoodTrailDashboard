import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Pag2 from '../../pages/Pag2/Pag2';

const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route path="/pag2" element={<Pag2 />}></Route>
        </Routes>
    );
}

export default Router;