import React from "react";
import { bene, req, resp } from "../../data/data";
import { useNavigate } from "react-router-dom";

const Description = ({ jobName, teamName }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto px-10">
      <div className="flex flex-col md:w-[70%] w-[90%] justify-center items-start gap-8 py-14">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-2xl md:text-xl sm:text-lg text-base font-semibold">
            Job Description
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold">
            About Us:
          </h1>
          <p className="lg:text-xl md:text-lg sm:text-base text-sm font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            voluptatum beatae ipsa pariatur eius deserunt odio laudantium
            tempora necessitatibus veniam saepe voluptates at vitae, dolores
            harum sit maiores dicta nobis blanditiis repellendus quos. Aliquam
            ab dolores eligendi, provident quod fugiat.
          </p>
        </div>

        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold">
            Roles and Responsibilities:
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2 list-disc pl-5">
            {resp?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold">
            Requirements:
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2 list-disc pl-5">
            {req?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold">
            Benefits:
          </h1>
          <ul className="flex flex-col justify-center items-start gap-2 list-disc pl-5">
            {bene?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center pb-5">
        <button
          type="submit"
          className="px-7 text-lg font-semibold capitalize py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-blue-600 hover:bg-blue-700 rounded-[12px] text-white"
          onClick={() =>
            navigate(`/job-form?teamName=${teamName}&jobName=${jobName}`)
          }
        >
          I'm Interested
        </button>
      </div>
    </div>
  );
};

export default Description;
