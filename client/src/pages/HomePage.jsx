import React, { useEffect, useState } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import JobsSection from "../components/homePage/JobsSection";
import { getJobs } from "../api/home";
import { homeHero } from "../data/data";

const HomePage = () => {
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

  // console.log(jobs);
  return (
    <>
      <Header
        title1={homeHero.title1}
        title2={homeHero.title2}
        text={homeHero.text}
        btn={homeHero.btn}
      />
      <JobsSection jobs={jobs} />
      <Footer />
    </>
  );
};

export default HomePage;
