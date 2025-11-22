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
    <div id="projects"className=" pt-30 ">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
    <div className="flex flex-col sm:flex-row justify-center items-center w-full flex-wrap gap-4  sm:gap-2 mb-5">
      {selectedProjects.map((data) => (
        <div key={data.id} className=" sm:w-[30%] flex flex-col items-center  ">
          <a href={data.liveLink}> <img src={data.img} className="h-[200px] w-[200px] lg:h-[250px] lg:w-[250px] " alt="" /> </a>
          <h2 className="text-white">{data.title}</h2>
        </div>
      ))}
    </div>
    <div className="flex justify-around mt-10">
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
