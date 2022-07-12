import React from 'react';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <SearchForm />
    </div>
  );
};

export default Home;
