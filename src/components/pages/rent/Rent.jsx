import React from 'react';
import './rent.scss'
import PageHeader from '../common/page-header/PageHeader';
import RentIntroduction from './RentIntroduction';
import { rentHeaderData } from './rentData';

const Rent = () => {
  return (
    <div className='rent'>
      <PageHeader pageHeader={rentHeaderData} overlay={true}/>
      <RentIntroduction/>
    </div>
  );
}

export default Rent;
