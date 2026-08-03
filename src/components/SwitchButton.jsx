import './SwitchButton.css'
import { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function SwitchButton2Vertical({
  topName, 
  bottomName,
  alignment,
  handleAlignment
}) {

  return (
    <ToggleButtonGroup
      orientation='vertical'
      value={alignment}
      exclusive
      onChange={handleAlignment}
    >
      <ToggleButton 
        className='toggle-btn'
        value="content"
      >
        {topName}
      </ToggleButton>
      <ToggleButton 
        className='toggle-btn'
        value="customize"
      >
        {bottomName}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

function SwitchButton3Horizonal({
  leftName, 
  middleName, 
  rightName,
  alignment,
  handleAlignment
}) {

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
    >


      <ToggleButton 
        className='toggle-btn'
        value={leftName}
      >
        {leftName}
      </ToggleButton>

      <ToggleButton 
        className='toggle-btn'
        value={middleName}
      >
        {middleName}
      </ToggleButton>

       <ToggleButton 
        className='toggle-btn'
        value={rightName}
      >
        {rightName}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export {SwitchButton2Vertical, SwitchButton3Horizonal}