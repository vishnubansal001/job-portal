import React from "react";
import { useNavigate } from "react-router-dom";

const HeroHome = ({ title1, title2, text, btn, teamName, jobName }) => {
  const navigate = useNavigate();
  const handleClick = (teamName, jobName) => {
    navigate(`/job-form?teamName=${teamName}&jobName=${jobName}`);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-50 text-white">
      <div className="flex flex-col justify-center items-center h-auto md:w-[60%] sm:w-[50%] w-[90%] gap-10 py-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-2xl md:text-xl sm:text-lg text-base font-semibold">
            {title1}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 md:w-[80%]">
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-lg font-semibold capitalize">
            {title2}
          </h1>
          {text && (
            <p className="lg:text-xl md:text-lg sm:text-base text-sm text-center">
              {text}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center pt-10">
          <button
            type="submit"
            onClick={() => {
              if (teamName && jobName) {
                handleClick(teamName, jobName);
              }
            }}
            className="px-7 text-lg font-semibold capitalize py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-green-600 hover:bg-green-700 rounded-[8px]"
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
