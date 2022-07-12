import React from 'react';

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import headerBackground from '../../assets/desktop/bg-pattern-header.svg';
import logo from '../../assets/desktop/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div className='header__container' style={{ backgroundImage: `url(${headerBackground})` }}>
      <img className='header-logo' src={logo} alt='logo' />
      <ToggleSwitch />
    </div>
  );
};

export default Header;
