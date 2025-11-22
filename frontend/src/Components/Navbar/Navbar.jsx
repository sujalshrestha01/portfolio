import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center justify-self-center px-5 fixed max-w-7xl w-full   h-10 top-0 bg-gray-500 rounded-xl">
      <h3>Sujal</h3>
      <div className="sm:hidden cursor-pointer">
        <FontAwesomeIcon onClick={handleMenu} icon={faBars} />
      </div>
      <ul className=" hidden sm:flex items-center gap-10  list-none ">
        <a href="#hero">
          <li className="hover:scale-150 transition">Home</li>{" "}
        </a>
        <a href="#aboutMe">
          <li className="hover:scale-150 transition">About Me</li>{" "}
        </a>
        <a href="#projects">
          <li className="hover:scale-150 transition">Projects</li>{" "}
        </a>
        <a href="#contact">
          <li className="hover:scale-150 transition">Contact</li>{" "}
        </a>
      </ul>
      <div
        className={` ${
          menu ? "right-0" : "-right-96"
        } sm:hidden  absolute top-0 h-screen -right-96 w-[40%] bg-gray-600  p-5 `}
      >
        <div className="w-full  text-end mb-5">
          <FontAwesomeIcon
            onClick={handleMenu}
            className="flex cursor-pointer "
            icon={faX}
          />
        </div>
        <ul className="  flex  flex-col gap-3 list-none   ">
          <a href="#hero">
            <li className="hover:scale-105 transition">Home</li>{" "}
          </a>
          <a href="#aboutMe">
            <li className="hover:scale-105 transition">About Me</li>{" "}
          </a>
          <a href="#projects">
            <li className="hover:scale-105 transition">Projects</li>{" "}
          </a>
          <a href="#contact">
            <li className="hover:scale-105 transition">Contact</li>{" "}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
