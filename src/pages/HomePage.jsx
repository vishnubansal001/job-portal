import React from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import HeroHome from "../components/HeroHome";
import JobsSection from "../components/homePage/JobsSection";

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
