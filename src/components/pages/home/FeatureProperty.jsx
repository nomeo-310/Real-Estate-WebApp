import React from 'react'
import { Link } from 'react-router-dom';

const FeatureProperty = ({featureProperty: {title, link, subtitle}, children}) => {
  return (
    <div className='home-feature-property'>
      <div className="home-feature-property-top margin-b-20">
        <h2 className="head-sm head-text">{title}</h2>
        <Link to={`${link}`} className='button-small'>Explore All</Link>
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
