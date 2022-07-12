import React from 'react';

import scootLogo from '../../assets/logos/scoot.svg';
import './JobCard.css';

const JobCard = () => {
  return (
    <div className='jobCard'>
      <div className='jobCard-company'>
        <img src={scootLogo} alt='company-logo' />
      </div>
      <p>
        5h ago
        <span></span>
        Full Time
      </p>
      <h2>Senior Software Engineer</h2>
      <h4>Scoot</h4>
      <h5>United Kingdom</h5>
    </div>
  );
};

export default JobCard;
