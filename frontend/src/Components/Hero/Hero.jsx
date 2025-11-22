import React, { useState } from "react";
import profileBlur from "../../assets/profileBlur.jpg";
import cv from "../../assets/sujal_shrestha.pdf";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section
      id="hero"
      className="flex flex-col h-screen items-center justify-center gap-10  px-4 md:px-20"
    >
      {/* Profile Image */}
      <div className="">
        <img
          src={profileBlur}
          alt="Sujal Shrestha"
          className="h-[200px] w-[200px] rounded-full object-cover transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
        />
      </div>

      {/* Text Content */}
      <div className="text-center  max-w-[70%] flex flex-col gap-4">
        <h1 className=" text-2xl sm:text-4xl md:text-5xl font-bold">
          <span className="bg-linear-to-r from-purple-500 via-blue-500 to-amber-500 bg-clip-text text-transparent animate-gradient">
            Hi, I'm Sujal Shrestha
          </span>
          , a passionate MERN Stack Developer.
        </h1>

        <p className="text-gray-500 text-[14px] sm:text-[16px]">
          I build modern, responsive, and user-friendly web applications using
          MongoDB, Express, React, and Node.js. I love turning ideas into
          functional projects while continuously learning new technologies and
          improving my skills.
        </p>

        <div className="mt-4 flex flex-row gap-4 justify-center " id="aboutMe">
          <button
            onClick={openModal}
            className="border border-gray-500 px-4 py-1 sm:px-8 sm:py-3 rounded-full  sm:text-lg font-medium hover:border-amber-500 transition-colors duration-300"
          >
            {" "}
            My Resume
          </button>
          {isOpen && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
              <div className="bg-white w-4/5 h-4/5 p-4 relative rounded ">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-0 right-2 text-black text-2xl font-bold "
                >
                  &times;
                </button>

                {/* PDF Preview */}
                <iframe
                  src={cv}
                  title="Resume"
                  className="w-full h-[90%] mt-5 "
                ></iframe>

                {/* Download Button */}
                <a
                  href={cv}
                  download="Sujal_Shrestha_CV.pdf"
                  className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Download CV
                </a>
              </div>
            </div>
          )}

          <a
            href="#contact"
            className="bg-amber-600 text-white px-4 py-1 sm:px-8 sm:py-3 rounded-full  sm:text-lg font-medium hover:bg-amber-700 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
