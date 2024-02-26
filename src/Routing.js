import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/index';
import Policy from './page/policy';
import Terns from './page/terns_';




const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/terns' element={<Terns />} />
        </Routes>
    );
};

export default Routing;