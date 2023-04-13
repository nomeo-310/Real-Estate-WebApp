import React from 'react';
import { Link } from 'react-router-dom';
import { rentIntroData } from './rentData';
import { rentsubscriptionData } from './rentData';

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
            <div className="rent-subscription margin-y-md">
                <div className="rent-subscription-content">
                    <div className="rent-subscription-left">
                        <h2 className="head-text normal-w normal-sm">HOW IT WORKS</h2>
                        <h2 className="head-text head-sm">How to subscribe to our monthly rent payment package</h2>
                        <h3 className="normal-text normal-sm">Simple steps to subscribing with us</h3>
                    </div>
                    <div className="rent-subscription-right">
                        <ul className="rent-subscription-steps">
                            {rentsubscriptionData.map((data) => (
                                <li className="rent-subscription-step" key={data.id}>
                                    <div className="icon">
                                        <span className={`mdi ${data.icon}`}></span>
                                    </div>
                                    <div className="text">
                                        <h2 className="normal-text normal-md margin-b-10">{data.title}</h2>
                                        <h3 className="normal-text normal-sm">{data.content}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="rent-subscription-link">
                    <Link to='/subscription-form' className='normal-text normal-md'>Get Started</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default RentIntroduction;
