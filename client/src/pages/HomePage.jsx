import React, { useEffect, useRef, useState } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import JobsSection from "../components/homePage/JobsSection";
import { getJobs } from "../api/home";
import { homeHero } from "../data/data";
import { useJobs } from "../hooks";

const HomePage = ({ color }) => {
  const {array} = useJobs();
  const targetRef = useRef(null);
  const scrollToElement = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // console.log(jobs);
  return (
    <>
      <Header
        color={color}
        title1={homeHero.title1}
        title2={homeHero.title2}
        text={homeHero.text}
        btn={homeHero.btn}
        onclick={scrollToElement}
      />
      <div ref={targetRef}>
        <JobsSection jobs={array} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
