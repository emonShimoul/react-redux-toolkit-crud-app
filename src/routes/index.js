import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/*' element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Index;