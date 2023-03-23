import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { textWords } from './homeData';
import { subText } from './homeData';
import { allLocation } from './homeData';
import HomeBanner from '../../images/homeImages/banner.jpg'
import './home.scss'
const HomeHeader = () => {
    const fadeIntervalMs = 4000;
    const textChangeIntervalMs = fadeIntervalMs * 2;
    const [fadeProp, setFadeProp] = useState({fade: 'fade-in'});
    const [wordOrder, setWordOrder] = useState(0);

    useEffect(() => {
        const fadeTimeOut = setInterval(() => {
            fadeProp.fade === 'fade-in' ? setFadeProp({fade: 'fade-out'}) : setFadeProp({fade: 'fade-in'})
        }, fadeIntervalMs)
        return ()=> clearInterval(fadeTimeOut)
    }, [fadeProp]);

    useEffect(() => {
        const wordTimeOut = setInterval(() => {
            setWordOrder((prevWordOrder) => (prevWordOrder + 1) % textWords.length)
        }, textChangeIntervalMs)
        return () => clearInterval(wordTimeOut)
    }, [textChangeIntervalMs]);

    useEffect(() => {
        const wordTimeOut = setInterval(() => {
            setWordOrder((prevWordOrder) => (prevWordOrder + 1) % subText.length)
        }, textChangeIntervalMs)
        return () => clearInterval(wordTimeOut)
    }, [textChangeIntervalMs]);

  return (
    <div className='home-header'>
      <div className="image-holder">
        <img src={HomeBanner} alt="home_banner"/>
      </div>
      <div className="container">
        <div className="home-header-content">
            <div className="home-header-text">
                <div className="main-header-text">
                    <h2 className={`head-lg ${fadeProp.fade}`}>{textWords[wordOrder]}</h2>
                    <h3 className={`normal-text normal-md ${fadeProp.fade}`}>{textWords[wordOrder]}</h3>
                </div>
                <div className="location-tag">
                    <h2 className="normal-text head-lg">#OurLocations</h2>
                    <ul className="locations">
                        {allLocation.map((location, index) => (<li className="normal-tiny normal-text" key={index}>{location}</li>))}
                    </ul>
                </div>
            </div>
            <div className="home-header-image">
                <img src={HomeBanner} alt="home_banner"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
