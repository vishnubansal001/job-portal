import React from "react";
import Description from "../components/JobPage/Description";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useJobs } from "../hooks";

function capitalizeString(input) {
  let words = input.split(" ");
  if (words.length === 2) {
    words = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  } else if (words.length === 1) {
    words[0] =
      words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
  }
  return words.join(" ");
}

const Job = ({ color }) => {
  const params = useParams();
  const navigate = useNavigate();
  const handleClick = () =>
    navigate(`/job-form?teamName=${params.teamName}&jobName=${params.jobName}`);
  const { array, setArray } = useJobs();
  const dataMap1 = new Map();
  array.forEach((element) => {
    dataMap1.set(element.name, element.positions);
  });
  if (
    !dataMap1?.has(capitalizeString(params.teamName)) ||
    !dataMap1
      ?.get(capitalizeString(params.teamName))
      ?.includes(capitalizeString(params.jobName))
  ) {
    return <NotFound />;
  }
  return (
    <div>
      <Header
        title1={"Coding Ninjas | Full Time"}
        title2={params.teamName + " " + params.jobName}
        btn={"I'm Interested"}
        teamName={params.teamName}
        jobName={params.jobName}
        color={color}
      />
      <Description
        teamName={capitalizeString(params.teamName)}
        jobName={capitalizeString(params.jobName)}
      />
      <Footer />
    </div>
  );
};

export default Job;
