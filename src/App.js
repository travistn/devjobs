import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import JobPosting from './containers/JobPosting/JobPosting';
import './App.css';
import jobs from './data.json';

const App = () => {
  const [job, setJob] = useState({});

  useEffect(() => {
    setJob(jobs[0]);
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job' element={<JobPosting job={job} />} />
      </Routes>
    </>
  );
};

export default App;
