import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { postJobs } from "../api/admin";
import { useNavigate } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

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
          <div item xs={4} key={index}>
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
          </div>
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

  const navigate = useNavigate();

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

  const convertMap = async () => {
    const array = Array.from(dataMap, ([key, value]) => ({
      name: key,
      positions: value,
    }));

    const data = await postJobs({ jobs: array });

    navigate("/");

    console.log(data);

    // console.log(array);
  };
  return (
    <>
      <Header />
      <div className="py-6 lg:px-20 px-10">
        <Typography
          variant="h3"
          gutterBottom
          className="text-center font-bold pb-5 text-green-500 hover:underline transition-all duration-300 ease-in-out cursor-pointer select-none"
        >
          Openings
        </Typography>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-6 pb-7">
          {parentLabels.map((label, index) => (
            <ParentCheckbox
              key={index}
              parentLabel={label}
              childrenLabels={childrenLabels}
              onParentChange={handleParentChange}
              dataMap={dataMap}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center pt-3">
          <button
            type="submit"
            className="px-7 text-lg font-semibold capitalize py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-green-600 hover:bg-green-700 text-white rounded-[8px]"
          >
            Display to Users
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckboxComponent;
