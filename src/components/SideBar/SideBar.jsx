import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiSolidFilePdf } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="flex flex-col w-10 p-4 justify-center">
      <a className="py-2 hover:text-red transition-all duration-300 hover:translate-x-1" href="https://www.linkedin.com/in/martingette250187/"  target="_blank">
        <AiFillLinkedin size="30px" />
      </a>
      <a className="py-2 hover:text-red transition-all duration-300 hover:translate-x-1" href="https://github.com/martin250187"  target="_blank">
        <AiFillGithub size="30px" />
      </a>
      <a className="py-2 hover:text-red transition-all duration-300 hover:translate-x-1" href="https://t.me/mapgeogis"  target="_blank">
        <BiLogoTelegram size="30px" />
      </a>
      <a className="py-2 hover:text-red transition-all duration-300 hover:translate-x-1" href="mailto:contacto@mapgeogis.com"  target="_blank">
        <BiLogoGmail size="30px" />
      </a>
      <a className="py-2 hover:text-red transition-all duration-300 hover:translate-x-1" href="https://mapgeogis.com/CV-MartínGette.pdf"  target="_blank">
        <BiSolidFilePdf size="30px" />
      </a>
    </div>
  );
};

export default SideBar;
