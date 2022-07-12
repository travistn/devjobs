import React from 'react';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import Jobs from '../Jobs/Jobs';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <SearchForm />
      <Jobs />
    </div>
  );
};

export default Home;
