import React, { useEffect, useState } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import HeroHome from "../components/homePage/HeroHome";
import JobsSection from "../components/homePage/JobsSection";
import { getJobs } from "../api/home";

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
      <Header />
      <HeroHome />
      <JobsSection jobs={jobs} />
      <Footer />
    </>
  );
};

export default HomePage;
