import React from 'react';
import { Route, Routes as RoutesGroups } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductPage from "../pages/Product";



export const RouterGroup = () => {

    return (
        <RoutesGroups>
            <Route path="" element={<HomePage/>}/>
            <Route path="product" element={<ProductPage/>}/>
            <Route path="product/:productNo" element={<ProductPage/>}/>

        </RoutesGroups>
    );
};