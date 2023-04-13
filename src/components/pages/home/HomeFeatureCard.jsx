import React from 'react'
import { Link } from 'react-router-dom';

const HomeFeatureCard = ({featureCardData: {id, title, image, link}}) => {
  return (
    <div className="home-feature-card" key={id}>
        <div className="home-feature-card-image">
            <img src={image} alt={`card_${id}`}/>
        </div>
        <h2 className="head-text head-sm text-center">{title}</h2>
        <div className="mask"></div>
        <div className="home-feature-card-text">
            <p className="normal-text text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Repellat mollitia voluptate, dolorem voluptas distinctio iusto 
                consectetur, assumenda soluta dolore, fuga ullam architecto. 
                Nulla quam quia, adipisci mollitia dolore nihil nobis!
            </p>
            <div className="margin-y-sm">
                <Link className='button-small normal-text button-tiny-curved' to={`${link}`}>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default HomeFeatureCard;
