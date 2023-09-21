import React from "react";

const HeroHome = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto bg-black text-white">
      <div className="flex flex-col justify-center items-center h-auto md:w-[60%] sm:w-[50%] w-[90%] gap-10 py-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-2xl md:text-xl sm:text-lg text-base font-semibold">
            One step in the right direction
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 md:w-[80%]">
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-lg font-semibold">
            Bag a job. Escalate your career.
          </h1>
          <p className="lg:text-xl md:text-lg sm:text-base text-sm text-center">
            All you need from a job is to be rewarding and add value to your
            career timeline, isn{"’"}t it? We get it. That{"’"}s why we believe
            in creating a working environment that caters to your goals.
            Starting from the process of finding the right role to having you
            look forward to coming into work every day, we make every step super
            smooth. Browse available jobs now!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            type="submit"
            className="px-7 text-lg font-semibold capitalize py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-blue-600 hover:bg-blue-700 rounded-[12px]"
          >
            View Openings
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
