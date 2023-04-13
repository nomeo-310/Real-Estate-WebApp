import React from 'react';
import { Link } from 'react-router-dom';

const FaqLink = () => {
  return (
    <div className="faq-link margin-y-md text-center">
        <Link to='/frequently-asked-questions' className='button-lg normal-text normal-md button-curved'>See FAQ</Link>
    </div>
  );
}

export default FaqLink;
