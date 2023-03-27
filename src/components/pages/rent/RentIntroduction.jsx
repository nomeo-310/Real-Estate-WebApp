import React from 'react';
import { rentIntroData } from './rentData';

const RentIntroduction = () => {
  return (
    <div className='rent-introduction margin-y-md'>
        <div className="container">
            <div className="introduction-text">
                <h2 className="head-text head-md">A new & smart way to live</h2>
                <h3 className="normal-text normal-sm">Out with the old, in with the new. Experience an easier way to live and pay rent flexibly.</h3>
            </div>
            <ul className="merits margin-y-sm">
                {rentIntroData.map((data) => (
                    <li className="merit" key={data.id}>
                        <h2 className="head-text head-xsm">{data.title}</h2>
                        <h3 className="normal-text normal-sm">{data.subtitle}</h3>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default RentIntroduction;
