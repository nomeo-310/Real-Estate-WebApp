import React from 'react';
import './page-header.scss'

const PageHeader = ({pageHeader: {image, title, subtitle}, overlay}) => {
  return (
    <div className='page-header' style={{backgroundImage: `url(${image})`}}>
      <div className="page-header-content">
        <div className="page-header-text">
            <h2 className="head-text head-md">{title}</h2>
            <h3 className="normal-text normal-md">{subtitle}</h3>
        </div>
      </div>
    { overlay && <div className='overlay'></div>}
    </div>
  );
}

export default PageHeader;
