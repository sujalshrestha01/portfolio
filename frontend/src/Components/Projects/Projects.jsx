import React, { useState } from "react";

import { datas } from "../../datas.js";

const Projects = () => {
     const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const startIndex = currentPage * itemsPerPage;
  const selectedProjects = datas.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(datas.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };
  return (
    <div>
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
    <div className="flex flex-row justify-center w-full flex-wrap  gap-2 mb-5">
      {selectedProjects.map((data) => (
        <div key={data.id} className="h-[200px] w-[30%] flex flex-col items-center  ">
          <img src="/" className="bg-white h-[200px] w-[200px] " alt="" />
          <h2 className="text-white">{data.id}</h2>
        </div>
      ))}
    </div>
    <div className="flex justify-around">
        <button onClick={handlePrev}  disabled={currentPage === 0} className="border border-gray-500 px-3 py-1 rounded-xl cursor-pointer hover:border-gray-100">
          Previous
        </button>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1} className="border border-gray-500 px-3 py-1 rounded-xl cursor-pointer  hover:border-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
