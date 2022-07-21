import React, { useState, useContext } from 'react';

import { ThemeContext } from '../../contexts/Theme';
import lightModeIcon from '../../assets/desktop/icon-sun.svg';
import darkModeIcon from '../../assets/desktop/icon-moon.svg';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <div className='toggle'>
      <img src={lightModeIcon} alt='light-mode' />
      <label className='toggle-switch'>
        <input
          className='toggle-checkbox'
          type='checkbox'
          checked={isToggled}
          onChange={onToggle}
        />
        <div
          className={`toggle-switch-circle ${
            theme === 'light-theme' ? 'light-toggle' : 'dark-toggle'
          }`}></div>
      </label>
      <img src={darkModeIcon} alt='dark-mode' />
    </div>
  );
};

export default ToggleSwitch;
