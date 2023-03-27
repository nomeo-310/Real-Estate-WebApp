import React from 'react'
import { featureCardData } from './homeData';
import HomeFeatureCard from './HomeFeatureCard';

const HomeFeature = () => {
  return (
    <div className='home-feature padding-y-md'>
        <div className="container">
            <div className="margin-y-sm text-center">
                <h2 className="head-text head-md">
                    There is a better way to finance a house
                </h2>
                <p className="normal-text text normal-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae 
                    perspiciatis sed voluptate ipsam provident. Iste unde id officia, 
                    nemo non laboriosam. Quod recusandae temporibus aperiam excepturi illo nam dolorum, 
                    minima architecto incidunt esse provident velit vel eos! Accusamus, vel.
                </p>
            </div>
            <div className="home-feature-cards">
                {featureCardData.map((featureCard) => (
                    <HomeFeatureCard featureCardData={featureCard} key={featureCard.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomeFeature;
