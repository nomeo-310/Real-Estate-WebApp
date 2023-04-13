import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Home from '../pages/home/Home';
import SingleBuy from '../pages/single-pages/SingleBuy';
import SingleInvest from '../pages/single-pages/SingleInvest';
import SingleRent from '../pages/single-pages/SingleRent';
import RentApartment from '../pages/single-pages/RentApartment';
import Faq from '../pages/faq/Faq';
import Rent from '../pages/rent/Rent';
import Buy from '../pages/buy/Buy';
import Invest from '../pages/invest/Invest';
import ErrorPage from '../pages/error-page/ErrorPage';
import BuyProperty from '../pages/buy/BuyProperty';
import Subscription from '../pages/subscription/Subscription';

const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rent-an-apartment'>
          <Route index element={<Rent/>}/>
          <Route path=':id' element={<RentApartment/>}/>
          <Route path='property/:id' element={<SingleRent/>}/>
        </Route>
        <Route path='/buy-properties'>
          <Route index element={<BuyProperty/>}/>
          <Route path=':id' element={<Buy/>}/>
          <Route path='property/:id' element={<SingleBuy/>}/>
        </Route>
        <Route path='/invest-in-apartments'>
          <Route index element={<Invest/>}/>
          <Route path='property/:id' element={<SingleInvest/>}/>
        </Route>
        <Route path='/frequently-asked-questions' element={<Faq/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/subscription-form' element={<Subscription/>}/>
      </Routes>
    </div>
  );
}

export default PageRouter;
