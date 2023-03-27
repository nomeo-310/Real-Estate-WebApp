import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Home from '../pages/home/Home';
import SingleBuy from '../pages/single-pages/SingleBuy';
import SingleInvest from '../pages/single-pages/SingleInvest';
import SingleRent from '../pages/single-pages/SingleRent';
import SingleLand from '../pages/single-pages/SingleLand';
import Faq from '../pages/faq/Faq';
import Rent from '../pages/rent/Rent';

const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rent-an-apartment/property/:id' element={<SingleRent/>}/>
        <Route path='/buy-an-apartment/property/:id' element={<SingleBuy/>}/>
        <Route path='/invest-in-apartments/property/:id' element={<SingleInvest/>}/>
        <Route path='/buy-landed-properties/property/:id' element={<SingleLand/>}/>
        <Route path='/frequently-asked-questions' element={<Faq/>}/>
        <Route path='/rent-an-apartment' element={<Rent/>}/>
      </Routes>
    </div>
  );
}

export default PageRouter;
