import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../../contexts/AppContext';
import './JobCard.css';

const JobCard = ({ job }) => {
  const { setJob } = useContext(AppContext);
  const navigate = useNavigate();

  const jobClickHandler = () => {
    setJob(job);

    navigate(`job/${job.id}`);
  };

  return (
    <div className='jobCard'>
      <div
        className='jobCard-company'
        style={{ backgroundColor: job.logoBackground }}
        onClick={jobClickHandler}>
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
      <h2 onClick={jobClickHandler}>{job.position}</h2>
      <h4>{job.company}</h4>
      <h5>{job.location}</h5>
    </div>
  );
};

export default JobCard;
