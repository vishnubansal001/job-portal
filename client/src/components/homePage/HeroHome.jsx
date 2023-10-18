import React from "react";
import { useNavigate } from "react-router-dom";

const HeroHome = ({ title1, title2, text, btn, teamName, jobName,onclick }) => {
  const navigate = useNavigate();
  const handleClick = (teamName, jobName) => {
    navigate(`/job-form?teamName=${teamName}&jobName=${jobName}`);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-[0.75] brightness-75 text-white">
      <div className="flex flex-col justify-center items-center h-auto md:w-[60%] sm:w-[50%] w-[90%] md:gap-10 gap-5 md:py-20 py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-2xl md:text-xl sm:text-lg text-base font-semibold">
            {title1}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="lg:text-5xl text-3xl font-semibold capitalize text-center">
            {title2}
          </h1>
          {text && (
            <p className="lg:text-xl md:text-lg sm:text-base text-sm text-center">
              {text}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center md:pt-10 pt-5">
          <button
            type="submit"
            onClick={() => {
              if (teamName && jobName) {
                handleClick(teamName, jobName);
              }
              else{
                onclick();
              }
            }}
            className="px-5 text-base md:text-lg font-semibold capitalize py-2 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-orange-600 hover:bg-orange-700 rounded-[8px]"
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
