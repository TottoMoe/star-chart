import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div style={{backgroundColor: "black"}}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </div>
  
);