import React from "react";
import images from "../../../assets";
// import { Revolutions } from "./revolution";

export const ParentBoxLand = () => {
  // export const TitleTranformasi = () => {
  return (
    <div className="flex lg:flex-row md:flex-col items-center justify-center md:text-[10px] sm:text-[10px] ">
      <div className="pt-[150px] ">
        <div className="lg:w-[613px] lg:h-[162px] md:w-[613px] md:h-[162px] font-title lg:text-[40px] md:text-[40px] sm:text[10px] sm:w-[358px] sm:h-[102px]  space-y-1  ">
          <h1 className=" text-right ">See what happens</h1>
          <h1 className="text-blue-400 text-center italic  ">
            before and after treatment
          </h1>
          <h1 className="text-right ">using Jett Plasma</h1>
        </div>
        <ColaseStep />
      </div>
      <BeforeFoto />

      <div>{/* <Revolutions/> */}</div>
    </div>
  );
};

export const BeforeFoto = () => {
  return (
    <div className="grid lg:grid-cols-1 lg:w-[613px] lg:h-[633px] gap-4 md:grid-center mr[100px] sm:flex-col  ">
      <div className="relative">
        <img
          className="h-full w-full object-cover lg:w-[613px] lg:h-[400px] sm:w-[358px] sm:h-[234px]
           md:w-[612px] md:h-[400px] rounded-[20px] ml-[80px] md:pt-[10px] sm:gap-2"
          src={images.before}
          alt="before"
        />
        <div className="absolute top-4 left-[500px] bg-gray-700 text-white px-2 py-1 rounded-[10px] ">
          After
        </div>
      </div>

      <div className="">
        <p className="lg:w-[553px] lg:h-[136px] m-10 text-title text-[24px]">
          Jett Plasma allows you to choose between ablative and non-ablative
          plasma energy to tighten skin, reduce wrinkles, and treat various
          imperfections, all without incisions or downtime.
        </p>
      </div>
    </div>
  );
};

export const ColaseStep = () => {
  return (
    <div className="pt-10 lg:h-[633px] lg:w-[613px]">
      <div className="grid lg:grid-cols-2 -mr-60 md:grid-cols-2  ">
        <div className="relative lg:h-[400px] lg:w-[400px] gap-4 pr-5  ">
          <img
            className="rounded-[20px] h-full w-full object-cover "
            src={images.bef1}
            alt="before"
          />
          <div className="absolute top-3 left-3 bg-gray-700 text-white px-2 py-1 rounded-[10px]">
            Before
          </div>
        </div>

        <div className="grid grid-rows-2 lg:h-[400px] lg:-[400px] gap-2  ">
          <div className="relative">
            <img
              className="rounded-[20px] h-full w-full object-cover lg:w-[199px] lg:h-[193px] md:w-[193px] md:h-[199px]"
              src={images.bef2}
              alt="after1"
            />
            <div className="absolute top-3 left-3 bg-gray-700 text-white px-2 py-1 rounded-[10px]">
              After 10 days
            </div>
          </div>

          <div className="relative lg:w-[199px] lg:h-[193px] md:w-[193px] md:h-[199px]">
            <img
              className="rounded-[20px] h-full w-full object-cover"
              src={images.bef3}
              alt="after2"
            />
            <div className="absolute top-3 left-3 bg-gray-700 text-white px-2 py-1 rounded-[10px] ">
              After 3 months
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
