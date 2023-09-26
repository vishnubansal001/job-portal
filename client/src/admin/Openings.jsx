import React, { useState } from "react";
import ParentCheckbox from "./ParentCheckBox";
import { teams } from "../data/data";

const Openings = () => {
  const [selectedData, setSelectedData] = useState([]);

  const handleCheckboxChange = (name, isChecked, isParent) => {
    if (isParent) {
      // const childrenNames = teams
      //   .find((group) => group.name === name)
      //   .positions.map((child) => `${name}-${child.name}`);
      // if (isChecked) {
      //   setSelectedData([...selectedData, ...childrenNames]);
      // } else {
      //   setSelectedData(
      //     selectedData.filter((item) => !childrenNames.includes(item))
      //   );
      // }
    } else {
      if (isChecked) {
        console.log("iuwegdhjg")
        setSelectedData([...selectedData, name]);
      } else {
        setSelectedData(selectedData.filter((item) => item !== name));
      }
    }
  };

  return (
    <div>
      {teams.map((group, index) => (
        <ParentCheckbox
          key={index}
          name={group.name}
          children={group.positions}
          onCheckboxChange={(name, isChecked) =>
            handleCheckboxChange(name, isChecked, true)
          }
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
      <button onClick={() => console.log(selectedData)}>
        Print Selected Data
      </button>
    </div>
  );
};

export default Openings;
