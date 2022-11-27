import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import EventForm from "./components/EventForm";
import HomePage from "./pages/HomePage";
import LoginForm from "./pages/Login";
import SingleEvent from "./pages/SingleEvent";


import { Route, Routes } from "react-router-dom";

export default function ContainerPage(){
    return(
        <div>
            <NavBar/>
            <div className="container">
            <Routes>
                <Route path="/Home" element={<HomePage/>}/>
                <Route path="/Login" element={<LoginForm/>}/>
                <Route path="/EventForm" element={<EventForm/>}/>
                <Route path="/events/:eventId" element={<SingleEvent/>}/>
            </Routes>
            </div>
            <Footer/>
        </div>
    );
}