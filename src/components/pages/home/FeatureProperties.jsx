import React from 'react'
import FeatureProperty from './FeatureProperty';
import { rentData } from './homeData';
import { rentApartmentData } from '../../data/data';
import { investData } from './homeData';
import { investApartmentData } from '../../data/data';
import { buyData } from './homeData';
import { buyApartmentData } from '../../data/data';
import RentCard from '../common/cards/RentCard';
import InvestCard from '../common/cards/InvestCard';
import BuyCard from '../common/cards/BuyCard';

const FeatureProperties = () => {
  return (
    <div className='home-feature-properties'>
        <div className="container">
            <div className="margin-y-sm text-center margin-b-80">
                <h2 className="head-text head-md">
                    Featured Apartments
                </h2>
                <p className="normal-text text-center normal-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Deleniti amet nostrum asperiores ullam quam eum unde iusto 
                    similique eaque at explicabo architecto deserunt pariatur 
                    quos vel ratione rerum molestiae ipsa libero, cupiditate rem? 
                    Atque fuga deserunt, quos consequatur excepturi architecto.
                </p>
            </div>
            <FeatureProperty featureProperty={rentData}>
                {rentApartmentData.slice(0,3).map((data) => (
                    <RentCard rentCardData={data} key={data.id}/>
                ))}
            </FeatureProperty>
            <FeatureProperty featureProperty={investData}>
                {investApartmentData.slice(0,3).map((data) => (
                    <InvestCard investCardData={data} key={data.id}/>
                ))}
            </FeatureProperty>
            <FeatureProperty featureProperty={buyData}>
                {buyApartmentData.slice(0,3).map((data) => (
                    <BuyCard buyCardData={data} key={data.id}/>
                ))}
            </FeatureProperty>
        </div>

      
    </div>
  )
}

export default FeatureProperties;
