import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroHome from "../components/HeroHome";
import JobsSection from "../components/JobsSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroHome />
      <JobsSection/>
      <Footer/>
    </>
  );
};

export default HomePage;
