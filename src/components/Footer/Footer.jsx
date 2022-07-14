import React from 'react';

import './Footer.css';

const Footer = ({ job }) => {
  return (
    <div className='footer__container'>
      <div className='footer'>
        <div className='footer-details'>
          <h3>{job.position}</h3>
          <h5>{job.company}</h5>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Footer;
