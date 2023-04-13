import React from 'react';
import './footer.scss'
import { Link } from 'react-router-dom';
import { socialMedia } from './footerData';
import { footerData } from './footerData';

const Footer = () => {
  return (
    <div className='main-footer padding-y-sm'>
      <div className="container">
        <div className="main-footer-left">
          <div className="brand-name">
            <Link to='/' className='head-text normal-w head-xsm'>Nomeo Realtors</Link>
          </div>
          <ul className="footer-social-icons">
            {socialMedia.map((icon, index) => (
              <li key={index}>
                <a href={icon.link}><span className={`mdi ${icon.name} normal-md`}></span></a>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-footer-right">
          <div className="main-footer-right-top">
            {footerData.map((data) => (
              <div key={data.id}>
                <h2 className="normal-text normal-md margin-b-20">{data.title}</h2>
                <ul className="main-footer-links">
                  {data.subtitles.map((subtitle, index) => (
                    <li key={index} className='normal-text normal-sm'>
                      <Link to={subtitle.link}>{subtitle.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="main-footer-right-bottom">
            <h2 className="normal-text normal-tiny text-capital">&copy; {new Date().getFullYear()} nomeo-concepts</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
