import React from 'react';
import { Link } from 'react-router-dom';
import { buyPropertyHeaderData } from './buyData';
import './buy-property.scss'
import PageHeader from '../common/page-header/PageHeader';
import HomeFeatureCard from '../home/HomeFeatureCard';
import { buyTextCard } from './buyData';
import { buyHeaderData } from './buyData';

const BuyProperty = () => {
  const BuyTextCard =({buyTextCard: {color, main_title, id, sub_title}})=> {
    return(
      <div className="buy-text-card" style={{border: `1px solid ${color}`}}>
        <h3 className='normal-text normal-tiny text-upper header-w'>{main_title}</h3>
        <div className="buy-text-card-title">
          <h2 style={{color: `${color}`}} className='head-text head-xxlg'>{id}</h2>
          <span style={{backgroundColor: `${color}`}} className='box-dot'></span>
        </div>
        <p className='normal-text normal-sm'>{sub_title}</p>
      </div>
    )
  }


  return (
    <div className='buy-property'>
      <PageHeader pageHeader={buyPropertyHeaderData} overlay={true}/>
      <div className="container">
        <div className="buy-property-header margin-y-sm">
          <h2 className="head-text head-md">Own properties without much stress...</h2>
          <p className="normal-text normal-sm margin-b-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quae ipsam minima saepe vitae, eius esse, possimus laboriosam perspiciatis, reprehenderit ea aliquam 
          laudantium nulla perferendis? Dolor nostrum alias necessitatibus at obcaecati quasi facilis maxime 
          ullam tenetur a reiciendis voluptate qui quas, doloremque voluptatibus optio animi nulla repellendus 
          corporis veniam amet pariatur aliquid! Quibusdam accusantium illo consectetur nesciunt soluta accusamus 
          consequatur nam.</p>
          <h4 className='head-text head-sm '>Becoming a house owner takes just <span className='one'>three</span> <span className='two'>easy</span> <span className='three'>steps...</span></h4>
          <div className="buy-text-cards">
            { buyTextCard.map((data) => (
              <BuyTextCard key={data.id} buyTextCard={data}/>
            ))}
            <div className="buy-text-card cta">
              <div className="cta-content margin-t-60">
                <p className='normal-text normal-sm'>If you have not created an account, you can go ahead and create an account with us.</p>
                <div className="margin-t-40">
                  <Link className='button-small button-tiny-curved normal-text' to='/subscription-form'>Start now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buy-property-features margin-y-md">
        { buyHeaderData.map((item) => (
            <HomeFeatureCard featureCardData={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyProperty;
