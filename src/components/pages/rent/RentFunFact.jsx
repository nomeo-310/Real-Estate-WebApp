import React from 'react';
import { rentFunFactData } from './rentData';

const RentFunFact = () => {
  return (
    <div className='rent-fun-fact margin-b-60'>
      <div className="container">
        <div className="rent-fun-fact-content button-curved margin-x">
            <h2 className="head-text head-lg text-center">We are proud of some of our numbers</h2>
            <h3 className="normal-text normal-lg text-center container">In line with our goals of organizing the property rental market and providing affordable housing, we make it a duty to celebrate every breakthrough.</h3>
            <div className="rent-fact margin-t-60">
                <ul className="rent-fact-list">
                    { rentFunFactData.map((data) => (
                        <li className="rent-fact-item" key={data.id}>
                            <h2 className="head-text head-lg text-center"><span className="mdi mdi-currency-ngn"></span>{data.title}</h2>
                            <h3 className="normal-text normal-md text-center">{data.subtitle}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RentFunFact;
