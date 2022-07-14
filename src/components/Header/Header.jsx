import React from 'react';
import { useNavigate } from 'react-router-dom';

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import headerBackground from '../../assets/desktop/bg-pattern-header.svg';
import logo from '../../assets/desktop/logo.svg';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header__container' style={{ backgroundImage: `url(${headerBackground})` }}>
      <img className='header-logo' src={logo} alt='logo' onClick={() => navigate('/')} />
      <ToggleSwitch />
    </div>
  );
};

export default Header;
