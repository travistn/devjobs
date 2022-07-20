import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import JobPosting from './containers/JobPosting/JobPosting';
import { AppContext } from './contexts/AppContext';
import jobsList from './data.json';
import './App.css';

const App = () => {
  const [job, setJob] = useState({});
  const [jobs, setJobs] = useState();
  const contextValues = { setJob, setJobs };

  useEffect(() => {
    setJobs(jobsList);
  }, []);

  return (
    <AppContext.Provider value={contextValues}>
      <Routes>
        <Route path='/' element={<Home jobs={jobs} />} />
        <Route path='/job/:jobId' element={<JobPosting job={job} />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
