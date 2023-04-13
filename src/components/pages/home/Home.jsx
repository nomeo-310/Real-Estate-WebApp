import React from 'react'
import './home.scss'
import HomeHeader from './HomeHeader'
import HomeFeature from './HomeFeature'
import FeatureProperties from './FeatureProperties'
import FactCard from './FactCard'
import FaqLink from '../common/FaqLink'

const Home = () => {
  return (
    <div className='home'>
      <HomeHeader/>
      <HomeFeature/>
      <FeatureProperties/>
      <FactCard/>
      <FaqLink/>
    </div>
  )
}

export default Home;
