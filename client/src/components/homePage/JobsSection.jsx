import React, { useState } from "react";
import { teams } from "../../data/data";
import { useNavigate } from "react-router-dom";

const JobsSection = () => {
  const [jobsAvailable, setJobsAvailable] = useState({
    graphics: true,
    graphicsLead: true,
    graphicsExec: true,
    graphicsHead: true,
    media: true,
    mediaLead: true,
    mediaExec: true,
    mediaHead: true,
    socialMedia: true,
    socialMediaLead: true,
    socialMediaExec: true,
    socialMediaHead: true,
    technical: true,
    technicalLead: true,
    technicalExec: true,
    technicalHead: true,
    outreach: true,
    outreachLead: true,
    outreachExec: true,
    outreachHead: true,
    events: true,
    eventsLead: true,
    eventsExec: true,
    eventsHead: true,
    content: true,
    contentLead: true,
    contentExec: true,
    contentHead: true,
    hr: true,
    hrLead: true,
    hrExec: true,
    hrHead: true,
    logistics: true,
    logisticsLead: true,
    logisticsExec: true,
    logisticsHead: true,
  });
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto px-20">
      <div className="flex flex-col justify-center items-center py-20 gap-8 w-full">
        <div className="flex flex-col justify-center items-center gap-2 border-b-2 border-b-gray-500 w-[90%] md:w-[80%] pb-10 select-none">
          <h1 className="lg:text-4xl md:text-3xl sm:text-xl text-lg font-bold text-gray-600 select-none">
            Join Us
          </h1>
          <p className="lg:text-2xl md:text-xl sm:text-lg text-base text-black select-none">
            Current Openings
          </p>
        </div>
        <div className="flex flex-col justify-start items-start w-[90%] md:w-[80%] gap-8">
          {teams?.map(
            (item, index) =>
              jobsAvailable[item.id] && (
                <div
                  key={index}
                  className="flex flex-col justify-start items-start gap-6 w-full"
                >
                  <h1 className="lg:text-2xl md:text-xl font-semibold sm:text-lg text-base text-black select-none">
                    {item.name}
                  </h1>
                  <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 w-full gap-y-4">
                    {item?.positions.map(
                      (pos, ind) =>
                        jobsAvailable[pos.id] && (
                          <div
                            key={ind}
                            className="w-full border-2 border-gray-300 rounded-[20px] px-4 py-8"
                          >
                            <h1
                              className="hover:underline hover:text-blue-600 cursor-pointer select-none"
                              onClick={() =>
                                navigate(
                                  `/job/${item.name.toLocaleLowerCase()}/${pos.name.toLocaleLowerCase()}`
                                )
                              }
                            >
                              {pos.name}
                            </h1>
                          </div>
                        )
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
