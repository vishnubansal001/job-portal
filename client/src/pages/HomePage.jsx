import React, { useEffect, useRef, useState } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import JobsSection from "../components/homePage/JobsSection";
import { getJobs } from "../api/home";
import { homeHero } from "../data/data";

const HomePage = ({ color }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);

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
        <JobsSection jobs={jobs} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
