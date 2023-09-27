import React from "react";
import HeroSection from "../components/JobPage/HeroSection";
import Description from "../components/JobPage/Description";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";
import { useParams } from "react-router-dom";

const Job = () => {
  const params = useParams();
  return (
    <div>
      <Header />
      <HeroSection teamName={params.teamName} jobName={params.jobName} />
      <Description teamName={params.teamName} jobName={params.jobName} />
      <Footer />
    </div>
  );
};

export default Job;
