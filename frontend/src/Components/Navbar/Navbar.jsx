import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center justify-self-center px-5 fixed max-w-7xl w-full   h-10 top-0 bg-gray-500 rounded-xl'>
        <h3>Sujal</h3>
        <ul className='flex items-center gap-10  list-none '>
           <a href="#hero"><li className='hover:scale-150 transition'>Home</li> </a> 
           <a href="#aboutMe"><li className='hover:scale-150 transition'>About Me</li> </a> 
           <a href="#projects"><li className='hover:scale-150 transition'>Projects</li> </a> 
           <a href="#contact"><li className='hover:scale-150 transition'>Contact</li> </a> 
           
        </ul>
        
    </div>
  )
}

export default Navbar