import React from 'react'
import { Link } from 'react-router-dom';

const FeatureProperty = ({featureProperty: {title, link, subtitle}, children}) => {
  return (
    <div className='home-feature-property margin-y-md'>
      <div className="home-feature-property-top margin-b-20">
        <h2 className="head-sm head-text">{title}</h2>
        <h2 className='normal-w'><Link to={`${link}`} className='button-small button-curved normal-text normal-sm'>Explore All</Link></h2>
      </div>
      <div className="home-feature-property-middle margin-b-20">
        <p className="normal-text normal-sm">{subtitle}</p>
      </div>
      <div className="home-feature-property-bottom">
        {children}
      </div>
    </div>
  )
}

export default FeatureProperty;
