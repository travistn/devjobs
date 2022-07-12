import React, { useState } from 'react';

import lightModeIcon from '../../assets/desktop/icon-sun.svg';
import darkModeIcon from '../../assets/desktop/icon-moon.svg';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => setIsToggled(!isToggled);

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
        <div className='toggle-switch-circle'></div>
      </label>
      <img src={darkModeIcon} alt='dark-mode' />
    </div>
  );
};

export default ToggleSwitch;
