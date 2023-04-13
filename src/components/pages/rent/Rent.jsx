import React from 'react';
import './rent.scss'
import PageHeader from '../common/page-header/PageHeader';
import RentIntroduction from './RentIntroduction';
import RentExplore from './RentExplore';
import RentLocations from './RentLocations';
import RentFunFact from './RentFunFact';
import FaqLink from '../common/FaqLink';
import { rentHeaderData } from './rentData';

const Rent = () => {
  return (
    <div className='rent'>
      <PageHeader pageHeader={rentHeaderData} overlay={true}/>
      <RentIntroduction/>
      <RentExplore/>
      <RentLocations/>
      <RentFunFact/>
      <FaqLink/>
    </div>
  );
}

export default Rent;
