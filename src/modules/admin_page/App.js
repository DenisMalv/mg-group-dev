import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useNavigate, } from "react-router-dom";

import Layout from './layout/layout';
import Loader from './Loader/Loader';

import Login from './Login/Login';
import Register from './Register/Register';



// const HomePage = lazy(() => import('pages/HomePage.js'));
// const RegisterPage = lazy(() => import('pages/RegisterPage.js'));
// const LoginPage = lazy(() => import('pages/LoginPage.js'));
// const Page404 = lazy(() => import('pages/Page404.js'));
// const ContactsPage = lazy(() => import('pages/ContactsPage.js'));
// const PrivateRoute = lazy(() => import('pages/PrivateRoute.js'));
// const PublicRoute = lazy(() => import('pages/PublicRoute.js'));

const App = () => {
  const navigate = useNavigate()

//  useEffect(()=>{

//   console.log(window.location)
//   if(window.location.pathname ==='/admin_page.html/login'){
//     navigate('/login')
//   }

//  },[window.location.path])
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
            <Route path="/" element={<Layout />}/>
            <Route path="login" element={<Login />}/>
            <Route path="register" element={<Register />}/>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;