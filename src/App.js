import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import JobPosting from './containers/JobPosting/JobPosting';
import { AppContext } from './contexts/AppContext';
import { ThemeContext } from './contexts/Theme';
import jobsList from './data.json';
import './App.css';

const App = () => {
  const [job, setJob] = useState({});
  const [jobs, setJobs] = useState();

  const contextValues = { setJob, setJobs };
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setJobs(jobsList);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <AppContext.Provider value={contextValues}>
        <Routes>
          <Route path='/' element={<Home jobs={jobs} />} />
          <Route path='/job/:jobId' element={<JobPosting job={job} />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
};

export default App;
