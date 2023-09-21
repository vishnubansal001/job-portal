import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';

const ParentCheckbox = ({ name, children, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    onCheckboxChange(name, event.target.checked);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          }
          label={name}
        />
        {isChecked && (
          <div style={{ paddingLeft: '1.5em' }}>
            {children.map((child, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={child.name}
              />
            ))}
          </div>
        )}
      </FormGroup>
    </div>
  );
};

export default ParentCheckbox;
