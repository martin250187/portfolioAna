import React from "react";
import worksData from "../Works/worksData";
import { AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
//import imagen from "../../assets/worksImg/work0.png"

const Works = () => {
  const routeImg = "https://mapgeogis.com/worksImg/";

  return (
    <div className="flex justify-center flex-wrap mx-12 h-full">
      {worksData.map((e) => (
        <div className="max-w-sm flex flex-col m-4 p-8 border rounded-md shadow-xl">
          <span>{/*definir la key*/}</span>
          <h2 className="p-2 text-lg underline">{e.title}</h2>
          <hr />
          <span className="p-2 text-sm">{e.description}</span>
          <div className=" max-w-xs">
            <a href={e.demo} target="_blank">
              <img
                className="p-2 border rounded-lg"
                src={routeImg + e.img}
                alt="Image not found"
              />
            </a>
          </div>
          <div className="flex p-2">
            <a
              className="pr-4 hover:text-red transition-all duration-300 hover:translate-x-1"
              href={e.git}
              target="_blank"
            >
              <AiFillGithub size="30px" />
            </a>
            <a
              className="pr-4 hover:text-red transition-all duration-300 hover:translate-x-1"
              href={e.demo}
              target="_blank"
            >
              <RxOpenInNewWindow size="30px" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
