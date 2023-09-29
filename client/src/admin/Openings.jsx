import React, { useState } from "react";
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
  onChildChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedChildren, setSelectedChildren] = useState([]);

  const handleParentChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onParentChange(parentLabel, isChecked);

    if (!isChecked) {
      setSelectedChildren([]);
    }
  };

  const handleChildChange = (childLabel, isChecked) => {
    const updatedSelectedChildren = isChecked
      ? [...selectedChildren, childLabel]
      : selectedChildren.filter((label) => label !== childLabel);

    setSelectedChildren(updatedSelectedChildren);
    onChildChange(parentLabel, updatedSelectedChildren);
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
                  checked={selectedChildren.includes(childLabel)}
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
  const [selectedParents, setSelectedParents] = useState([]);
  const [selectedChildren, setSelectedChildren] = useState([]);

  const handleParentChange = (parentLabel, isChecked) => {
    const updatedSelectedParents = isChecked
      ? [...selectedParents, { name: parentLabel, positions: [] }]
      : selectedParents.filter((label) => label !== parentLabel);

    setSelectedParents(updatedSelectedParents);
  };

  const handleChildChange = (parentLabel, selectedChildren) => {
    // const updatedSelectedChildren = [...selectedChildren];

    // .findIndex(obj => obj.name.includes(parentLabel));

    setSelectedChildren(updatedSelectedChildren);
  };

  const parentLabels = [
    "Parent 1",
    "Parent 2",
    "Parent 3",
    "Parent 4",
    "Parent 5",
    "Parent 6",
    "Parent 7",
    "Parent 8",
    "Parent 9",
  ];
  const childrenLabels = ["Child 1", "Child 2", "Child 3"];

  const handleSaveState = () => {
    const savedState = selectedParents.map((parent) => {
      const selectedChildrenForParent = selectedChildren.filter((child) =>
        child.startsWith(parent)
      );
      return {
        parent,
        selectedChildren: selectedChildrenForParent,
      };
    });
    console.log(savedState);
  };

  const selectedData = {
    selectedParents: selectedParents,
    selectedChildren: selectedChildren,
  };

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
          onChildChange={handleChildChange}
        />
      ))}
      <Typography variant="h6" gutterBottom>
        Selected Data
      </Typography>
      <pre>{JSON.stringify(selectedData, null, 2)}</pre>
      <Button variant="contained" color="primary" onClick={handleSaveState}>
        Save the State
      </Button>
    </div>
  );
};

export default CheckboxComponent;
