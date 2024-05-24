import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  return (
    <div className="w-full  bg-slate-800">
      <div className="flex items-center justify-center sm:justify-between px-5 sm:px-20 md:px-11 lg:px-5 xl:px-0 max-w-6xl mx-auto">
        <div className="sm:flex items-center gap-9 text-white bg-green-500 h-full py-2 px-5 hidden">
          <div className="flex items-center gap-2 cursor-pointer text-sm md:text-[16px]">
            <MdOutlineMail />
            <h2>halalbites@gmail.com</h2>
          </div>
          <div className="items-center gap-2 hidden sm:flex cursor-pointer">
            <IoCallOutline />
            <h2>+8801954057920</h2>
          </div>
        </div>
        <div className="flex items-center gap-3 py-2 sm:py-0">
          <Link
            to="/"
            className="w-7 h-7 bg-green-600 rounded-full hover:bg-green-700  text-white flex items-center justify-center group"
          >
            <GoGlobe className="group-hover:scale-110 transition-all duration-150" />
          </Link>
          <Link
            to="/"
            className="w-7 h-7 bg-green-600 rounded-full hover:bg-green-700  text-white flex items-center justify-center group"
          >
            <FaLinkedinIn className="group-hover:scale-110 transition-all duration-150" />
          </Link>
          <Link
            to="/"
            className="w-7 h-7 bg-green-600 rounded-full hover:bg-green-700  text-white flex items-center justify-center group"
          >
            <IoLogoGithub className="group-hover:scale-110 transition-all duration-150" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
