import React from 'react';

import './JobPostingHeader.css';

const JobPostingHeader = ({ job }) => {
  return (
    <div className='jobPostingHeader__container'>
      <div className='jobPostingHeader-logo' style={{ backgroundColor: job.logoBackground }}>
        <img
          src={`/assets/logos/${job?.company?.split(' ').join('').toLowerCase()}.svg`}
          alt='logo'
        />
      </div>
      <div className='jobPostingHeader-company'>
        <h3>{job.company}</h3>
        <p>{`${job?.company?.split(' ').join('').toLowerCase()}.com`}</p>
      </div>
      <button>Company Site</button>
    </div>
  );
};

export default JobPostingHeader;
