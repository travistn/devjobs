import React from 'react';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import Jobs from '../Jobs/Jobs';
import './Home.css';

const Home = ({ jobs }) => {
  return (
    <div className='home'>
      <Header />
      <SearchForm jobs={jobs} />
      <Jobs jobs={jobs} />
    </div>
  );
};

export default Home;
