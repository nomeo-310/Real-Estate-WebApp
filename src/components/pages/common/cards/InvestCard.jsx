import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const InvestCard = ({investCardData: {id, image, address, city, share_price, purchase_status, status, price, bed_no, bath_no, toilet_no, apartment_area, available_shares, remaining_shares}, small}) => {
  return (
    <div className='property-card'>
        <div className="property-card-top">
            <div className="property-card-image">
                <img src={image} alt={`property-${id}`}/>
            </div>
            <div className="property-card-bottom">
                <div className="property-address">
                    <h2 className="normal-text normal-sm">Location:</h2><h2 className="normal-text normal-sm">{address}, {city}</h2>
                </div>
                <div className="property-price">
                    <h2 className="normal-text normal-sm">Starting Price:</h2>
                    <div>
                        <span className="mdi mdi-currency-ngn"></span>
                        <h2 className="normal-text normal-sm">{share_price.toLocaleString()}/<span className='normal-text normal-tiny'>shares</span></h2>
                    </div>
                </div>
            </div>
        </div>
        { small ? 
        <span className={purchase_status === 'available' ? 'normal-text button-tiny apartment-status available' : 'normal-text button-tiny apartment-status'}>{purchase_status}</span>
        : 
        <span className="normal-text button-tiny status">{status}</span>
        }
        
        <div className="mask invest"></div>
        <div className="property-card-details invest">
            <div className="price-shares">
                <div className='price-wrapper'>
                    <h2 className="normal-text normal-sm">Property Price: </h2>
                    <div className="property-price-value">
                        <div className="property-price-value-inner">
                            <span className="mdi mdi-currency-ngn"></span>
                            <h2 className="normal-text normal-sm">{price.toLocaleString()}</h2>
                        </div>
                        {small ? 
                        <Link to={`/invest-in-apartments/property/${id}`}><span className="mdi mdi-information"></span></Link>
                        :
                        <Link to={`/invest-in-apartments/property/${id}`}><span className='button-tiny normal-text normal-tiniest button-round'>Read More</span></Link>
                        }
                    </div>
                </div>
                <div className="property-shares">
                    <div className='shares-wrapper'>
                        <h2 className="normal-text normal-sm">Shares Available: </h2> 
                        <h2 className="normal-text normal-sm">{available_shares.toLocaleString()}</h2>
                    </div>
                    <div className='shares-wrapper'>
                        <h2 className="normal-text normal-sm">Shares Remaining: </h2> 
                        <h2 className="normal-text normal-sm">{remaining_shares.toLocaleString()}</h2>
                    </div>
                </div>
            </div>
            <div className="apartment-details">
                <div className="bed">
                    <span className="mdi mdi-bed normal-lg"></span> <h2 className="normal-text normal-tiny">{bed_no} Bedrooms</h2>
                </div>
                <div className="bath">
                    <span className="mdi mdi-bathtub normal-lg"></span> <h2 className="normal-text normal-tiny">{bath_no} Bathrooms</h2>
                </div>
                <div className="toilet">
                    <span className="mdi mdi-toilet normal-lg"></span> <h2 className="normal-text normal-tiny">{toilet_no} Toilets</h2>
                </div>
                <div className="area">
                   <span className="mdi normal-lg mdi-land-plots"></span> <h2 className="normal-text normal-tiny">{apartment_area} m<span>2</span></h2> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default InvestCard;
