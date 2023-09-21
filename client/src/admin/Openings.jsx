import React, { useState } from 'react';
import ParentCheckbox from './ParentCheckBox';
import { teams } from '../data/data';

const Openings = () => {
  const [selectedData, setSelectedData] = useState([]);

  const handleCheckboxChange = (name, isChecked) => {
    if (isChecked) {
      setSelectedData([...selectedData, name]);
    } else {
      setSelectedData(selectedData.filter(item => item !== name));
    }
  };

  return (
    <div>
      {teams.map((group, index) => (
        <ParentCheckbox
          key={index}
          name={group.name}
          children={group.positions}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
      <div>
        <h3>Selected Data:</h3>
        <ul>
          {selectedData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Openings;
