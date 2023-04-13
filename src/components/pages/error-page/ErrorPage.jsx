import React from 'react';
import './error-page.scss'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="container">
        <div className="text-content base-color">
            <h2 className='head-text head-lg'>Ooops!</h2>
            <p className='normal-text normal-lg margin-b-60'>The page you requested was not found, we have a fine guess why. If you type the URL directly please make sure 
                the spelling is correct.
            </p>
            <Link to='/' replace className='button-lg button-round normal-text normal-lg'>Go Home</Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
