import React, { useState, useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import searchIcon from '../../assets/desktop/icon-search.svg';
import locationIcon from '../../assets/desktop/icon-location.svg';
import './SearchForm.css';

const SearchForm = ({ jobs }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const [isChecked, setIsChecked] = useState(false);
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  const { setJobs } = useContext(AppContext);

  const titleLowerCase = title.toLowerCase();
  const locationLowerCase = location.toLowerCase();

  const onChecked = () => {
    setIsChecked(!isChecked);
    setFullTimeOnly(!fullTimeOnly);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      setJobs(
        jobs?.filter(
          (job) =>
            job.contract === 'Full Time' &&
            (titleLowerCase === job?.position.toLowerCase() ||
              titleLowerCase === job?.company.toLowerCase()) &&
            locationLowerCase === job?.location.toLowerCase()
        )
      );
    } else if (!isChecked) {
      setJobs(
        jobs?.filter(
          (job) =>
            job?.contract === 'Part Time' &&
            (titleLowerCase === job?.position.toLowerCase() ||
              titleLowerCase === job?.company.toLowerCase()) &&
            locationLowerCase === job?.location.toLowerCase()
        )
      );
    }
  };

  return (
    <div className='form__container'>
      <form className='form' onSubmit={handleFilterSubmit}>
        <label className='form-left'>
          <img src={searchIcon} alt='search-icon' />
          <input
            type='text'
            placeholder='Filter by title, companies, expertise...'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <div className='form-divider' />
        <label className='form-middle'>
          <img src={locationIcon} alt='location-icon' />
          <input
            type='text'
            placeholder='Filter by location...'
            id='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
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
