import React from 'react';

import JobCard from '../../components/JobCard/JobCard';
import jobs from '../../data.json';
import './Jobs.css';

const Jobs = () => {
  return (
    <div className='jobs__container'>
      {jobs.map((job) => (
        <div key={job.id}>
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};

export default Jobs;
