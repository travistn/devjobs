import React from 'react';

import './JobPostingHeader.css';
import scootLogo from '../../assets/logos/scoot.svg';

const JobPostingHeader = () => {
  return (
    <div className='jobPostingHeader__container'>
      <div className='jobPostingHeader-logo'>
        <img src={scootLogo} alt='logo' />
      </div>
      <div className='jobPostingHeader-company'>
        <h3>Scoot</h3>
        <p>scoot.com</p>
      </div>
      <button>Company Site</button>
    </div>
  );
};

export default JobPostingHeader;
