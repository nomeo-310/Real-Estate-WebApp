import React from 'react';
import { Link } from 'react-router-dom';
import { rentExploreImages } from './rentData';
import './rent.scss'

const RentExplore = () => {
  return (
    <div className='explore-apartment margin-y-md'>
      <div className="container">
        <h2 className="head-text head-md">Explore our apartments</h2>
        <h2 className="normal-text normal-sm">Search from over 200+ verified listings</h2>
        <div className="explore-apartment-links margin-y-sm">
            <div className="explore-apartment-left section button-curved">
                <Link to='/rent-an-apartment/verified-apartments'>
                    <img src={rentExploreImages.verifiedImage} alt=""/>
                    <div className="explore-apartment-text">
                        <h2 className="normal-text normal-sm">{rentExploreImages.verifiedText}</h2>
                        <h2 className="normal-text normal-tiny">200+ Apartments</h2>
                    </div>
                    <div className="overlay button-curved"></div>
                </Link>
            </div>
            <div className="explore-apartment-right">
                <div className="explore-apartment-right-top">
                    <div className="explore-apartment-right-top-left section button-curved">
                        <Link to='/rent-an-apartment/premium-apartments'>
                            <img src={rentExploreImages.premiumImage} alt=""/>
                            <div className="explore-apartment-text">
                                <h2 className="normal-text normal-sm">{rentExploreImages.premiumText}</h2>
                                <h2 className="normal-text normal-tiny">200+ Apartments</h2>
                            </div>
                            <div className="overlay button-curved"></div>
                        </Link> 
                    </div>
                    <div className="explore-apartment-right-top-right section button-curved">
                        <Link to='/rent-an-apartment/bedspaces'>
                            <img src={rentExploreImages.bedspaceImage} alt=""/>
                            <div className="explore-apartment-text">
                                <h2 className="normal-text normal-sm">{rentExploreImages.bedspaceText}</h2>
                                <h2 className="normal-text normal-tiny">200+ Apartments</h2>
                            </div>
                            <div className="overlay button-curved"></div>
                        </Link>
                    </div>
                </div>
                <div className="explore-apartment-right-bottom section button-curved">
                    <Link to='/rent-an-apartment/shared-rent-apartments'>
                        <img src={rentExploreImages.sharedImage} alt=""/>
                        <div className="explore-apartment-text">
                            <h2 className="normal-text normal-sm">{rentExploreImages.sharedText}</h2>
                            <h2 className="normal-text normal-tiny">200+ Apartments</h2>
                        </div>
                        <div className="overlay button-curved"></div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RentExplore;
