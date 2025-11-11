import React from 'react';
import profileBlur from '../../assets/profileBlur.jpg';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-10  mt-20 px-4 md:px-20'>
      
      {/* Profile Image */}
      <div className=''>
        <img
          src={profileBlur}
          alt="Sujal Shrestha"
          className='h-[200px] w-[200px] rounded-full object-cover transform transition-transform duration-500 hover:scale-105 hover:shadow-xl'
        />
      </div>

      {/* Text Content */}
      <div className='text-center  max-w-[70%] flex flex-col gap-4'>
        <h1 className='text-4xl md:text-5xl font-bold'>
          <span className='bg-linear-to-r from-purple-500 via-blue-500 to-amber-500 bg-clip-text text-transparent animate-gradient'>
            Hi, I'm Sujal Shrestha
          </span>
          , a passionate MERN Stack Developer.
        </h1>

        <p className='text-gray-500'>
          I build modern, responsive, and user-friendly web applications using MongoDB, Express, React, and Node.js. I love turning ideas into functional projects while continuously learning new technologies and improving my skills.
        </p>

        <div className='mt-4 flex flex-col sm:flex-row gap-4 justify-center '>
          <button className='border border-gray-500 px-8 py-3 rounded-full text-lg font-medium hover:border-amber-500 transition-colors duration-300'>
            My Resume
          </button>
          <button className='bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-600 transition-colors duration-300'>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
