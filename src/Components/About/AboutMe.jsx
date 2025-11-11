import React from 'react';


const AboutMe = () => {
  return (
    <section className='flex flex-col items-center gap-8 px-4 md:px-20 mt-20'>
      
      {/* Section Heading */}
      <h2 className='text-4xl font-bold mb-4 text-center'>
        About Me
      </h2>



      {/* Paragraph */}
      <p className='text-gray-400 text-center max-w-3xl'>
        I am currently pursuing <span className='font-semibold'>BSc CSIT at Swastik College</span>.  
        I am a motivated <span className='font-semibold'>MERN Stack Developer</span> with hands-on experience in <span className='font-semibold'>React, Node.js, and MongoDB</span>.  
        I enjoy building responsive and user-friendly web applications, continuously learning new technologies, and improving my skills.  
         I like exploring <span className='font-semibold'>new tech trends</span> and staying updated with the latest industry advancements.
      </p>
 

      {/* Skills */}
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        {['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Redux', 'JavaScript', 'Git'].map((skill, index) => (
          <span key={index} className='px-4 py-2 border rounded-full text-sm font-medium bg-gray-400 hover:bg-amber-400 transition-colors'>
            {skill}
          </span>
        ))}
      </div>


    </section>
  );
};

export default AboutMe;
