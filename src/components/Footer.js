import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
        <p className="text-sm text-center m-2">
          Designed and Developed by Amitesh
        </p>
        <p className="text-sm font-semibold text-center m-2">
          Copyright © 2024 Amitesh.dev
        </p>
        <span className="flex items-center justify-center gap-7 m-2">
          <a
            href="https://github.com/amitesh786"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/asingh23091990/"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            <FaLinkedinIn />
          </a>
        </span>
    </div>
  );
}

export default Footer;
