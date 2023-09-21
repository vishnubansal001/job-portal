import React from "react";
import HeroSection from "../components/JobPage/HeroSection";
import Description from "../components/JobPage/Description";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";

const Job = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Description />
      <Footer />
    </div>
  );
};

export default Job;
