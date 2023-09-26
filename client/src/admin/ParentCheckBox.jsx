import React, { useState } from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const ParentCheckbox = ({ name, children, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (name, checked) => {
    setIsChecked(checked);
    // console.log(event.target.getNamedItem);
    console.log(name);
    onCheckboxChange(name, checked, false);
  };

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
          }
          label={name}
        />
        {isChecked && (
          <div style={{ paddingLeft: "1.5em" }}>
            {children.map((child, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={child.name}
                onChange={(e) => handleCheckboxChange(child.name, e.target.checked)}
              />
            ))}
          </div>
        )}
      </FormGroup>
    </div>
  );
};

export default ParentCheckbox;
