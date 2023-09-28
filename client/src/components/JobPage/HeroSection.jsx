import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ jobName, teamName }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto bg-black text-white">
      <div className="flex flex-col justify-center items-center h-auto md:w-[60%] sm:w-[50%] w-[90%] gap-10 py-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-2xl md:text-xl sm:text-lg text-base font-semibold">
            Coding Ninjas | Full Time
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 md:w-[80%]">
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-lg font-semibold capitalize">
            {teamName + " " + jobName}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            onClick={() =>
              navigate(`/job-form?teamName=${teamName}&jobName=${jobName}`)
            }
            className="px-7 text-lg font-semibold capitalize py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-blue-600 hover:bg-blue-700 rounded-[12px]"
          >
            I'm Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
