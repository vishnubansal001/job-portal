import React, { useEffect, useState } from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import { getCsvFile, getUsersData } from "../api/applications";

const Recommendations = () => {
  const [users, setUsers] = useState();
  // const users = [
  //   {
  //     name: "jsdhfiks",
  //     email: "sleikdhtiedxoiesdkjtfodlx",
  //     branch: "psro",
  //     year: "psro",
  //     rollNumber: "psro",
  //     mobile: "dlxikchgodr jk",
  //     applied: "sorihjdcgoidrj",
  //     link: "https://storage.googleapis.com/job-portal-2d63d.appspot.com/modified-1695810769657.pdf?GoogleAccessId=firebase-adminsdk-2ou1i%40job-portal-2d63d.iam.gserviceaccount.com&Expires=1710210774&Signature=hyOx09XA9fv3lyY7nMLDHdTWD8F03wFpIKUEi4%2Bf3FzhG42cjR6ciBEtJ1noAJpZNO5SxuAqrvrp6WexbSx%2Bu8S1wfVL38z75On8FSHydeu%2Bb1iuRMEz%2FQcNzCuKMAc2eYGO66H1OmveMGxBfeCXI7P5frgxGiNe0m2AiWs5Yn%2F6qkVPDPFI3jsy%2BOQfVHEGac7Lk0QdYFuqdHT9TRBLT18C5HipJd5nQgfgwTFcr5xQ4%2FftQ%2Byf3DPVZnQ1GeHg4eo7clhEI0jNNA7yoNTDZkc1lK16F1C1XoK0Zs9gdL%2B%2FK%2FEs%2Ba4jTshUrvERnHhjuKBLikMX5ryStPo9q2ngcA%3D%3D",
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsersData();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchData();
  }, []);
  const handleDownloadClick = (url) => {
    var link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = "downloaded_file.pdf";
    // link.download();
    link.click();
  };

  const handleClickCsv = async () => {
    const url = await getCsvFile();
    var link = document.createElement('a');
    link.href = url;
    link.click();
  }
  return (
    <div>
      <Header />
      <section className="w-full min-h-[80vh] py-5 flex flex-col  items-center">
        <div className="overflow-x-auto w-full">
          <table className="min-w-full bg-white border divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  branch
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  roll number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ph Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applied for
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Download Resume
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users?.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>{index + 1}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>{item.name}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>{item.email}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>{item.branch}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>{item.year}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>{item.rollNumber}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>{item.mobile}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>{item.applied}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => handleDownloadClick(item.link)}
                      className="text-blue-600"
                    >
                      Resume
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col justify-center items-center mt-5">
          <button
            onClick={() => handleClickCsv()}
            className="px-7 text-lg font-semibold capitalize text-white py-3 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 ease-in-out bg-blue-600 hover:bg-blue-800 hover:text-white rounded-[12px]"
          >
            Download Excel Sheet
          </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Recommendations;
