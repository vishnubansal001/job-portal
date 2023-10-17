import React from "react";
import { useNavigate } from "react-router-dom";

const JobsSection = ({ jobs }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto lg:px-20 px-10">
      <div className="flex flex-col justify-center items-center py-20 gap-8 w-full">
        <div className="flex flex-col justify-center items-center gap-2 border-b-2 border-b-gray-500 w-[90%] md:w-[80%] pb-10 select-none">
          <h1 className="lg:text-4xl md:text-3xl sm:text-xl text-lg font-bold text-gray-600 select-none">
            Join Us
          </h1>
          <p className="lg:text-2xl md:text-xl sm:text-lg text-base text-black select-none text-center">
            Current Openings
          </p>
        </div>
        <div className="flex flex-col justify-start items-start w-full md:w-[80%] gap-8">
          {jobs && jobs.length > 0 ? (
            <>
              {jobs?.map((item, index) => (
                <>
                  {item?.positions?.length > 0 && (
                    <div
                      key={index}
                      className="flex flex-col justify-start items-start gap-6 w-full"
                    >
                      <h1 className="lg:text-2xl md:text-xl font-semibold sm:text-lg text-base w-full md:text-start text-center text-black select-none capitalize">
                        {item.name}
                      </h1>
                      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-6 w-full gap-y-4">
                        {item?.positions.map((pos, ind) => (
                          <div
                            key={ind}
                            onClick={() =>
                              navigate(
                                `/job/${item.name.toLocaleLowerCase()}/${pos.toLocaleLowerCase()}`
                              )
                            }
                            className="w-full border-2 border-gray-300 rounded-[20px] px-4 py-8 hover:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer"
                          >
                            <h1 className="text-slate-400 text-xs cursor-pointer select-none capitalize">
                              Apprentiship
                            </h1>
                            <h1 className="text-orange-500 font-bold cursor-pointer select-none capitalize">
                              {pos}
                            </h1>
                            <h1 className="text-slate-400 text-xs cursor-pointer select-none capitalize">
                              Chitkara University, Rajpura
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ))}
            </>
          ) : (
            <div>
              <h1>No Jobs are available</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
