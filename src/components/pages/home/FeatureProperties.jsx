import React from 'react'
import FeatureProperty from './FeatureProperty';
import { rentData } from './homeData';
import { buyData } from './homeData';
import { investData } from './homeData';
import { landData } from './homeData';

const FeatureProperties = () => {
  return (
    <div className='home-feature-properties padding-y-sm'>
        <div className="container">
            <div className="margin-y-sm text-center">
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
            <FeatureProperty featureProperty={rentData}></FeatureProperty>
            <FeatureProperty featureProperty={buyData}></FeatureProperty>
            <FeatureProperty featureProperty={investData}></FeatureProperty>
            <FeatureProperty featureProperty={landData}></FeatureProperty>
        </div>

      
    </div>
  )
}

export default FeatureProperties;
