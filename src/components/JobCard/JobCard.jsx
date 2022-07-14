import React from 'react';

import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className='jobCard'>
      <div className='jobCard-company' style={{ backgroundColor: job.logoBackground }}>
        <img
          src={`/assets/logos/${job.company.split(' ').join('').toLowerCase()}.svg`}
          alt='company-logo'
        />
      </div>
      <p>
        {job.postedAt}
        <span></span>
        {job.contract}
      </p>
      <h2>{job.position}</h2>
      <h4>{job.company}</h4>
      <h5>{job.location}</h5>
    </div>
  );
};

export default JobCard;
