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

function SwitchButton3Horizonal({leftName, middleName, rightName}) {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
    >
      <ToggleButton 
        className='toggle-btn'
        value="left"
      >
        {leftName}
      </ToggleButton>
      <ToggleButton 
        className='toggle-btn'
        value="middle"
      >
        {middleName}
      </ToggleButton>
            <ToggleButton 
        className='toggle-btn'
        value="right"
      >
        {rightName}
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export {SwitchButton2Vertical, SwitchButton3Horizonal}