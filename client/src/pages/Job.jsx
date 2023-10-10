import React from "react";
import HeroSection from "../components/JobPage/HeroSection";
import Description from "../components/JobPage/Description";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import { useNavigate, useParams } from "react-router-dom";

const Job = () => {
  const params = useParams();
  const navigate = useNavigate();
  const handleClick = () =>
    navigate(`/job-form?teamName=${params.teamName}&jobName=${params.jobName}`);
  return (
    <div>
      <Header
        title1={"Coding Ninjas | Full Time"}
        title2={params.teamName + " " + params.jobName}
        btn={"I'm Interested"}
        teamName={params.teamName}
        jobName={params.jobName}
      />
      <Description teamName={params.teamName} jobName={params.jobName} />
      <Footer />
    </div>
  );
};

export default Job;
