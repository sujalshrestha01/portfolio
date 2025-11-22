import React from "react";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="flex flex-col items-center gap-8 px-4 py-20 bg-gray-700 md:px-20   "
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>

      {/* Paragraph */}
      <p className="text-gray-400 text-center max-w-3xl">
        I am currently pursuing{" "}
        <span className="font-semibold">BSc CSIT at Swastik College</span> and
        developing my career as a{" "}
        <span className="font-semibold">MERN Stack Developer</span>. I have
        hands-on experience with{" "}
        <span className="font-semibold">
          React, Node.js, Express, and MongoDB
        </span>
        , and I enjoy building{" "}
        <span className="font-semibold">
          responsive, clean, and practical web applications
        </span>
        . I am constantly learning, improving, and exploring{" "}
        <span className="font-semibold">modern web technologies</span> to stay
        aligned with industry standards.
      </p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {[
          "MongoDB",
          "Express",
          "React",
          "Node.js",
          "Tailwind CSS",
          "Redux",
          "JavaScript",
          "Git",
        ].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 border rounded-full text-sm font-medium bg-gray-400 hover:bg-amber-400 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
