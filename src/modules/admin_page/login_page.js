import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './Login/Login';




const root = ReactDOM.createRoot(document.getElementById('login'));
root.render(

    // <BrowserRouter basename='/admin_page.html'>
    // {/* <BrowserRouter basename='/'> */}
        <Login />
    //  </BrowserRouter>
);