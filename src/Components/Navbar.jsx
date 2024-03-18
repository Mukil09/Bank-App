import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../Constants/Main";

function Navbar() {
  let [toggle, setToggle] = useState(false);

  const handleLinkClick = () => {
    // Set toggle to false to hide the menu when a link is clicked
    setToggle(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="bank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            {/* Add onClick event to call handleLinkClick */}
            <a href={`#${nav.id}`} onClick={handleLinkClick}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="toggle"
          className=" w-[24px] h-[28px] object-contain cursor-pointer transition"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6  bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                {/* Add onClick event to call handleLinkClick */}
                <a href={`#${nav.id}`} onClick={handleLinkClick}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
