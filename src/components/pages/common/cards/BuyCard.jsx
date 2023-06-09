import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

const BuyCard = ({buyCardData: {id, image, address, down_payment, apartment_status, status, annual_rent, city, bed_no, bath_no, toilet_no, apartment_area}, small}) => {
  return (
    <div className={small ? `property-card small` : `property-card`}>
        <div className="property-card-top">
            <div className="property-card-image">
                <img src={image} alt={`property-${id}`}/>
            </div>
            <div className="property-card-bottom">
                <div className="property-address">
                    <h2 className="normal-text normal-sm">{address}, {city}</h2>
                </div>
                <div className="property-price">
                    <h2 className="normal-text normal-sm">Down Payment:</h2>
                    <div>
                        <span className="mdi mdi-currency-ngn"></span>
                        <h2 className="normal-text normal-sm">{down_payment.toLocaleString()}</h2>
                    </div>
                </div>
            </div>
        </div>
        { small ? 
        <span className={apartment_status === 'available' ? 'normal-text button-tiny apartment-status available' : 'normal-text button-tiny apartment-status'}>{apartment_status}</span>
        : 
        <span className="normal-text button-tiny status">{status}</span>
        }
        
        <div className="mask"></div>
        <div className="property-card-details">
            <div className="annual-rent">
                <h2 className="normal-text normal-sm">Annual Rent: </h2>
                <div className="annual-rent-value">
                    <div className='annual-rent-value-inner'>
                        <span className="mdi mdi-currency-ngn"></span>
                        <h2 className="normal-text normal-sm">{annual_rent.toLocaleString()}/<span className='normal-text normal-tiny'>year</span></h2>
                    </div>
                    {small ? 
                        <Link to={`/buy-properties/property/${id}`}><span className="mdi mdi-information"></span></Link>
                        :
                        <Link to={`/buy-properties/property/${id}`}><span className='button-tiny normal-text normal-tiniest button-tiny-curved'>Read More</span></Link>
                    }
                </div>
            </div>
            <div className="apartment-details">
            <div className="bed">
                    <span className="mdi mdi-bed normal-lg"></span> <h2 className="normal-text normal-tiny">{bed_no === 1 ? `${bed_no} Bedroom` : `${bed_no} Bedrooms`}</h2>
                </div>
                <div className="bath">
                    <span className="mdi mdi-bathtub normal-lg"></span> <h2 className="normal-text normal-tiny">{bath_no === 1 ? `${bath_no} Bathroom` : `${bath_no} Bathrooms`}</h2>
                </div>
                <div className="toilet">
                    <span className="mdi mdi-toilet normal-lg"></span> <h2 className="normal-text normal-tiny">{toilet_no === 1 ? `${toilet_no} Toilet` : `${toilet_no} Toilets`}</h2>
                </div>
                <div className="area">
                   <span className="mdi normal-lg mdi-land-plots"></span> <h2 className="normal-text normal-tiny">{apartment_area} m<span>2</span></h2> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default BuyCard;
