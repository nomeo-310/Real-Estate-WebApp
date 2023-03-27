import React from 'react'
import './home.scss'
import HomeHeader from './HomeHeader'
import HomeFeature from './HomeFeature'
import FeatureProperties from './FeatureProperties'
import FactCard from './FactCard'

const Home = () => {
  return (
    <div className='home'>
      <HomeHeader/>
      <HomeFeature/>
      <FeatureProperties/>
      <FactCard/>
    </div>
  )
}

export default Home;
