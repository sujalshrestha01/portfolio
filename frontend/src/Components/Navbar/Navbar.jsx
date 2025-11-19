import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
        <h3>Sujal</h3>
        <ul className='flex items-center list-none gap-14'>
            <li className=''>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact </li>
        </ul>
        
    </div>
  )
}

export default Navbar