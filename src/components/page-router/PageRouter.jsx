import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Home from '../pages/home/Home';

const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default PageRouter;
