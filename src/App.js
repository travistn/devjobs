import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import JobPosting from './containers/JobPosting/JobPosting';
import { AppContext } from './contexts/AppContext';
import './App.css';

const App = () => {
  const [job, setJob] = useState({});
  const contextValues = { setJob };

  return (
    <AppContext.Provider value={contextValues}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job/:jobId' element={<JobPosting job={job} />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
