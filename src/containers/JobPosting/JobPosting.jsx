import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import JobPostingHeader from '../../components/JobPostingHeader/JobPostingHeader';
import './JobPosting.css';

const JobPosting = () => {
  return (
    <>
      <Header />
      <JobPostingHeader />
      <div className='jobPosting__container'>
        <div className='jobPosting__top'>
          <div className='jobPosting__top-details'>
            <p>
              1w ago<span></span>Part Time
            </p>
            <h3>Senior Software Engineer</h3>
            <h5>United Kingdom</h5>
          </div>
          <button>Apply Now</button>
        </div>
        <div className='jobPosting-description'>
          <p>
            "Scoot is looking for a Senior Software Engineer passionate about building approachable,
            innovative and user-first experiences to join our small but growing Engineering team.
            You will be responsible for building and maintaining front end functionality across all
            of Scoot’s applications, fostering a growing team of software engineers, and helping
            drive and maintain best software patterns and practices in our codebase."
          </p>
        </div>
        <div className='jobPosting-requirements'>
          <h3>Requirements</h3>
          <p>
            "The ideal candidate is as passionate about solving challenges through technology. They
            are well-versed in building proof of concepts from scratch and taking these POCs to
            production and scale. The right fit will have the engineering experience to build and
            iterate quickly and is comfortable working with product and design to set the technical
            strategy and roadmap."
          </p>
        </div>
        <div className='jobPosting-role'>
          <h3>What Will You Do</h3>
          <p>
            "We are looking for a Senior Software Engineer to join as one of our first hires. As we
            iterate on our MVP, you will have the opportunity to drive the vision and own the build
            behind our digital experience. You’ll have the support of an experienced technical
            advisor, a Head of Product, and an external team to work with."
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobPosting;
