import React from "react";
import { ContentBox } from "./contenBox";

export const BoxAbout = () => {
  return (
    <div className="lg:grid grid-col-2 md:p-[50px] bg-black rounded-[80px] justify-center lg:h-[680px] md:h-[1800px] h-[1800px] w-full  z-[1]  pt-[80px]  ">
      <TitleAbout />
    </div>
  );
};

export const TitleAbout = () => {
  return (
    <div className="lg:w-[725px] lg:h-[480px] w-[420px]  left-0   ">
      <h1 className=" text-white lg:text-[50px] text-[30px]  p-[20px] pt-[30px]  ">
        About Jett Plasma
      </h1>
      <ContentBox />
    </div>
  );
};

export const Boxspace = () => {
  return (
    <div className="grid grid-col-2 bg-[#F8F5EF] h-[254px] justify-center  w-full pl-[400px] z-[100] relative ">
      <div>
        <img src=" " alt="" />
      </div>
    </div>
  );
};
