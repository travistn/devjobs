import React, { useState } from 'react';

import searchIcon from '../../assets/desktop/icon-search.svg';
import locationIcon from '../../assets/desktop/icon-location.svg';
import './SearchForm.css';

const SearchForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChecked = () => setIsChecked(!isChecked);

  return (
    <div className='form__container'>
      <form className='form'>
        <label className='form-left'>
          <img src={searchIcon} alt='search-icon' />
          <input type='text' placeholder='Filter by title, companies, expertise...' />
        </label>
        <div className='form-divider' />
        <label className='form-middle'>
          <img src={locationIcon} alt='location-icon' />
          <input type='text' placeholder='Filter by location...' />
        </label>
        <div className='form-divider' />
        <label className='form-right'>
          <input type='checkbox' checked={isChecked} onChange={onChecked} />
          <p>Full Time Only</p>
          <button>Search</button>
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
