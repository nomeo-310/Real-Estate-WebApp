import React from 'react';
import { funFactData } from './homeData';

const FactCard = () => {
  return (
    <div className='fact-card margin-y-md'>
        <div className="container">
            <div className="fact-card-inner">
                <h2 className="margin-y-sm head-text head-md text-center">It's your turn don't miss out!</h2>
                <ul className="fact-card-inner-content margin-b-30">
                    {funFactData.map((data) => (
                        <li className="fact-card-item" key={data.id}>
                            <h2 className="head-text head-xlg"><span className="mdi mdi-currency-ngn"></span>{data.title}</h2>
                            <h3 className="normal-text normal-md">{data.subtitle}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
}

export default FactCard;
