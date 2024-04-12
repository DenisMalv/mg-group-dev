import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Register from './Register/Register';




const root = ReactDOM.createRoot(document.getElementById('register'));
root.render(

    // <BrowserRouter basename='/admin_page.html'>
    // {/* <BrowserRouter basename='/'> */}
        <Register />
    //  </BrowserRouter>
);