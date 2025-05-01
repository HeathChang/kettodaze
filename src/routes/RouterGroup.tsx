import React from 'react';
import { Route, Routes as RoutesGroups } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductPage from "../pages/Product";
import SearchPage from "../pages/Search";
import MyPage from "../pages/MyPage";
import NearbyStorePage from "../pages/NearbyStore";
import Login from '../components/Login/Login';
import SignIn from "../pages/SignIn";



export const RouterGroup = () => {

    return (
        <RoutesGroups>
            <Route path="" element={<HomePage/>}/>
            <Route path="product" element={<ProductPage/>}/>
            <Route path="product/:productNo" element={<ProductPage/>}/>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="nearby-store" element={<NearbyStorePage/>}/>
            <Route path="my-page" element={<MyPage/>}/>
            <Route path="test" element={<SignIn onBackToLogin={()=>{}}/>}/>
        </RoutesGroups>
    );
};