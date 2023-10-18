import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { postJobs } from "../api/admin";
import { useNavigate } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import { useAuth, useJobs } from "../hooks";
import toast from "react-hot-toast";
import { getJobs } from "../api/home";

const ParentCheckbox = ({
  parentLabel,
  childrenLabels,
  onParentChange,
  dataMap,
  ischeck,
  positions,
}) => {
  const [isChecked, setIsChecked] = useState(ischeck);

  // console.log()
  const [ar, setAr] = useState([]);

  useEffect(() => {
    let parentData = positions;
    if (parentData) {
      dataMap.set(parentLabel, parentData);
      setAr(parentData);
    }
    // console.log(dataMap);
  }, []);

  const handleParentChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    if (!isChecked) {
      setAr([]);
    }
    onParentChange(parentLabel, isChecked);
  };

  const handleChildChange = (childLabel, isChecked) => {
    // console.log(isChecked);
    if (isChecked) {
      if (ar.length == 0 || (ar.length > 0 && !ar.includes(childLabel))) {
        const arr = [...ar];
        arr.push(childLabel);
        setAr(arr);
        dataMap.set(parentLabel, arr);
        // console.log(arr);
      }
    } else {
      const arr = ar.filter((item) => item !== childLabel);
      dataMap.set(parentLabel, arr);
      setAr(arr);
      // console.log(arr);
    }
    // console.log(ar);
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
                  checked={ar.includes(childLabel)}
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

const CheckboxComponent = ({ color }) => {
  const dataMap = new Map();

  const handleParentChange = (parentLabel, isChecked) => {
    isChecked ? dataMap.set(parentLabel, []) : dataMap.delete(parentLabel);
  };

  const navigate = useNavigate();
  const { authInfo } = useAuth();
  const { array, setArray } = useJobs();

  const parentLabels = [
    "Graphics",
    "Media",
    "Social Media",
    "Technical",
    "Outreach",
    "Events",
    "Content",
    "Hr",
    "Logistics",
  ];
  const childrenLabels = ["Lead", "Executive", "Head"];

  const convertMap = async () => {
    try {
      const arr = Array.from(dataMap, ([key, value]) => ({
        name: key,
        positions: value,
      }));
      const data = await postJobs({ jobs: arr, id: authInfo.profile.id });
      toast.success("Openings Edited");
      setArray(arr);
      navigate("/");
    } catch (error) {
      toast.error(`something went wrong`);
      console.log(error.message);
    }
  };
  const dataMap1 = new Map();
  array.forEach((element) => {
    dataMap1.set(element.name, element.positions);
  });

  return (
    <>
      <Header color={color} />
      <div className="py-6 lg:px-20 px-10">
        <Typography
          variant="h3"
          gutterBottom
          className="text-center font-bold pb-5 text-orange-500 hover:underline transition-all duration-300 ease-in-out cursor-pointer select-none"
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
              // jobs={array}
              ischeck={dataMap1.has(label)}
              positions={dataMap1.get(label)}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center pt-3">
          <button
            type="submit"
            onClick={convertMap}
            className="px-7 text-lg font-semibold capitalize py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-orange-600 hover:bg-orange-700 text-white rounded-[8px]"
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
