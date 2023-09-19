import React from "react";

const resp = [
  "Setting up campaigns for direct advertisers as well as In-house products in Google Ad Manager, managing it and finding opportunities to optimize it.",
  "Work directly with the Branding & Collaboration team to negotiate, plan and execute campaigns, including testing, implementation delivery, and optimization of campaigns.",
  "Monitor for all campaigns that go live for timely delivery and maximum ROI.",
  "Identity top performing Pre bid partners and onboarding them in in our Ad Stack",
  "Identification of new business/revenue growth opportunities.",
  "Manage Pre bid partners with daily monitoring of performance and identify opportunities to increase performance.",
  "Collaboration with accounts team to ensure timely payments from Pre bid partners",
  "Monthly/Quarterly performance review for programmatic revenue channels",
  "Scaling new revenue streams like Server Side Bidding, In-stream and mobile traffic monetization",
];

const req = [
  "Must have experience in Pre bid and Google Ad Manager working and Private Marketplace deals(PMPs)",
  "Complete Knowledge of Operations and Reporting in Google Ad Management",
  "Excellent communication and people management skills",
  "Should be good in Strategic planning and Partnership",
  "Hands-on experience with Microsoft Excel & Ad Operations",
  "Strong understanding of programmatic advertising and open auctions in general.",
  "Job Location: 9th Floor, A - 143, Sovereign Corporate Towers, Sector-136, Noida, Uttar Pradesh, India",
];

const bene = [
  "Additional benefits up to 1.5 Lac (Health Insurance by ICICI Bank and Meals, beverages, and other refreshments provided by the employer during office hours)",
  "Health Insurance coverage is up to 5 Lacs.",
  "Flexible working hours",
  "5 days working",
  "Leave encashment",
  "Casual Dress Code",
  "​Work-life Balance",
];

const Description = () => {
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
        >
          I'm Interested
        </button>
      </div>
    </div>
  );
};

export default Description;
