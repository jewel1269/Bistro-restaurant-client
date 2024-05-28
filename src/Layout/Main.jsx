import { Outlet, useLocation } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import Navbar from '../Pages/Home/Home/Shared/Navbar/Navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter =
    location.pathname.includes('LogIn') || location.pathname.includes('SignUp');
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <ToastContainer />
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
