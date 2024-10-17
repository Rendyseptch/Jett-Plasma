import React from "react";
import { ContentBox } from "./contenBox";

export const BoxAbout = () => {
  return (
    <div className="grid grid-col-2 bg-black rounded-[80px] justify-center lg:h-auto  w-full  z-[1]  ">
      <TitleAbout />
    </div>
  );
};

export const TitleAbout = () => {
  return (
    <div className="w-[725px] h-[480px] left-0">
      <h1 className=" text-white lg:text-[50px] text-[30px]  pt-[100px] ">
        About Jett Plasma
      </h1>
      <ContentBox />
    </div>
  );
};

export const Boxspace = () => {
  return (
    <div className="grid grid-col-2 bg-[#F8F5EF] h-[254px] justify-center  w-full pl-[500px] z-[100] relative ">
      <div>
        <img src=" " alt="" />
      </div>
    </div>
  );
};
