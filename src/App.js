import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import JobPosting from './containers/JobPosting/JobPosting';
import './App.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/job' element={<JobPosting />} />
      </Routes>
    </>
  );
};

export default App;
