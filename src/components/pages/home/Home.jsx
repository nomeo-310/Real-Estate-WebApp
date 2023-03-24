import React from 'react'
import './home.scss'
import HomeHeader from './HomeHeader'
import HomeFeature from './HomeFeature'
import FeatureProperties from './FeatureProperties'

const Home = () => {
  return (
    <div className='home'>
      <HomeHeader/>
      <HomeFeature/>
      <FeatureProperties/>
    </div>
  )
}

export default Home;
