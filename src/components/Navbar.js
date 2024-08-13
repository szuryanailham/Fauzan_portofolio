"use client";
import { IoMenu } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <header className=" z-[100] fixed bg-white w-full py-4 sm:px-8 px-5 flex justify-between items-center shadow-md">
        <div className="screen-max-width flex w-full items-center justify-between">
          {/* logo */}
          <div>
            <h1 className="font-kameron">ARZB</h1>
            <p className="text-xs text-center">studio</p>
          </div>
          {/* menu list */}
          <ul className="hidden md:flex min-w-md h-10 items-center">
            <li className="px-5 text-sm cursor-pointer text-gray transition-all">
              <Link to="Hero" smooth={true} duration={500} className="block py-2 px-3 text-black rounded cursor-pointer">
                Home
              </Link>
            </li>
            <li className="px-5 text-sm cursor-pointer text-gray transition-all">
              <Link to="About" smooth={true} duration={500} className="block py-2 px-3 text-black rounded cursor-pointer">
                About
              </Link>
            </li>
            <li className="px-5 text-sm cursor-pointer text-gray transition-all">
              <Link to="Category" smooth={true} duration={500} className="block py-2 px-3 text-black rounded cursor-pointer">
                Category
              </Link>
            </li>
            <li className="px-5 text-sm cursor-pointer text-gray transition-all">
              <Link to="Gallery" smooth={true} duration={500} className="block py-2 px-3 text-black rounded cursor-pointer">
                Gallery
              </Link>
            </li>
          </ul>
          {/* button burger menu */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <IoMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </header>
      {/* sidebar */}
      <div ref={sidebarRef} className={`z-[100] fixed top-0 right-0 w-1/2 bg-white  h-screen p-5 transition-transform duration-500 ease-in-out transform shadow-lg ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="text-center flex flex-col gap-5 font-bold mt-[20%]">
          <li className="py-2">
            <Link to="Hero" smooth={true} duration={500} className="block py-2 px-3 text-black rounded cursor-pointer">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link to="About" smooth={true} duration={500} className="block py-2 px-3 text-black rounded cursor-pointer">
              About
            </Link>
          </li>
          <li className="py-2">
            <Link to="Category" smooth={true} duration={500} className="block py-2 px-3 text-black rounded cursor-pointer">
              Category
            </Link>
          </li>
          <li className="py-2">
            <Link to="Gallery" smooth={true} duration={500} className="block py-2 px-3 text-black rounded cursor-pointer">
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
