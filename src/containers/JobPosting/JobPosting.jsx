import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import JobPostingHeader from '../../components/JobPostingHeader/JobPostingHeader';
import './JobPosting.css';

const JobPosting = ({ job }) => {
  return (
    <>
      <Header />
      <JobPostingHeader job={job} />
      <div className='jobPosting__container'>
        <div className='jobPosting__top'>
          <div className='jobPosting__top-details'>
            <p>
              {job.postedAt}
              <span></span>
              {job.contract}
            </p>
            <h3>{job.position}</h3>
            <h5>{job.location}</h5>
          </div>
          <button>Apply Now</button>
        </div>
        <div className='jobPosting-description'>
          <p>{job.description}</p>
        </div>
        <div className='jobPosting-requirements'>
          <h3>Requirements</h3>
          <p>{job?.requirements?.content}</p>
          <ul>
            {job?.requirements?.items?.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <div className='jobPosting-role'>
          <h3>What Will You Do</h3>
          <p>{job?.role?.content}</p>
          <ul>
            {job?.role?.items?.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer job={job} />
    </>
  );
};

export default JobPosting;
