import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Button,
} from "@mui/material";

const ParentCheckbox = ({
  parentLabel,
  childrenLabels,
  onParentChange,
  dataMap,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleParentChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onParentChange(parentLabel, isChecked);
  };

  const handleChildChange = (childLabel, isChecked) => {
    let parentData = dataMap.get(parentLabel) || [];
    if (isChecked) {
      if (!parentData.includes(childLabel)) {
        parentData.push(childLabel);
      }
    } else {
      let index = parentData.indexOf(childLabel);
      if (index !== -1) {
        parentData.splice(index, 1);
      }
    }

    dataMap.set(parentLabel, parentData);
  };

  return (
    <div>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={handleParentChange} />}
        label={parentLabel}
      />
      <Grid container>
        {childrenLabels.map((childLabel, index) => (
          <Grid item xs={4} key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={!isChecked}
                  checked={dataMap.get(parentLabel)?.includes(childLabel)}
                  onChange={(event) =>
                    handleChildChange(childLabel, event.target.checked)
                  }
                />
              }
              label={childLabel}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const CheckboxComponent = () => {
  const dataMap = new Map();

  const handleParentChange = (parentLabel, isChecked) => {
    isChecked ? dataMap.set(parentLabel, []) : dataMap.delete(parentLabel);
  };

  const parentLabels = [
    "Graphics",
    "Media",
    "Social Media",
    "Technical",
    "Outreach",
    "Events",
    "Content",
    "HR",
    "Logistics",
  ];
  const childrenLabels = ["Lead", "Executive", "Head"];
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Parent Checkboxes
      </Typography>
      {parentLabels.map((label, index) => (
        <ParentCheckbox
          key={index}
          parentLabel={label}
          childrenLabels={childrenLabels}
          onParentChange={handleParentChange}
          dataMap={dataMap}
        />
      ))}
      <Typography variant="h6" gutterBottom>
        Selected Data
      </Typography>
      <Button variant="contained" color="primary">
        Save the State
      </Button>
    </div>
  );
};

export default CheckboxComponent;
