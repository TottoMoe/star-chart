import React from "react";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./pages/Footer";
import LoginForm from "./pages/Login";


import { Route, Routes } from "react-router-dom";

export default function ContainerPage(){
    return(
        <div>
            <NavBar/>
            <div className="container">
            <Routes>
                <Route path="/Home" element={<HomePage/>}/>
                <Route path="/Login" element={<LoginForm/>}/>
            </Routes>
            </div>
            <Footer/>
        </div>
    );
}