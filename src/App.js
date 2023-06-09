import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from './components/pages/common/nav-bar/NavBar';
import Footer from './components/pages/common/footer/Footer';
import PageRouter from './components/page-router/PageRouter';
import ScrollToTop from './components/scroll/ScrollToTop'
import './App.scss';
import './css/all.min.css';
import './css/brands.css';
import './css/brands.min.css';
import './css/fontawesome.min.css';
import './material_icons/css/materialdesignicons.css';

const App =() => {
  
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <ScrollToTop/>
        <PageRouter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
