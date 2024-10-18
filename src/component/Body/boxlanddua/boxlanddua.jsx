import React from "react";
import images from "../../../assets";

export const ParentBoxLand = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 items-center justify-center text-center py-10">
      {/* Text Section - Move to left on large screens */}
      <div className="lg:order-1 order-2 translate-y-[100px]">
        <div className="space-y-1 p-[20px] lg:w-[613px] w-[318px]">
          <h1 className="text-[24px] lg:text-[40px] text-right">See what happens</h1>
          <h1 className="text-blue-400 italic text-[24px] lg:text-[40px] md:text-[40px] text-center">
            before and after treatment
          </h1>
          <h1 className="text-[24px] lg:text-[40px] text-right">using Jett Plasma</h1>
        </div>
        <ColaseStep />
      </div>
      
      {/* Image Section - Move to right on large screens */}
      <BeforeFoto />
    </div>
    </div>
  );
};

export const BeforeFoto = () => {
  return (
    <div className="grid lg:grid-cols-1 lg:w-[613px] lg:h-[633px] gap-4 lg:order-2 order-1">
      <div className="relative">
        <img
          className="h-[358px] w-[358px] translate-x-[-70px] object-cover lg:w-[613px] lg:h-[400px] sm:w-[358px] sm:h-[234px]
           md:w-[612px] md:h-[400px] rounded-[20px] ml-[80px] md:pt-[10px] sm:gap-2"
          src={images.before}
          alt="before"
        />
        <div className="lg:absolute  w-[] top-4 left-[500px] bg-gray-700 text-white px-2 py-1 rounded-[10px] ">
          After
        </div>
      </div>

      <div className="">
        <p className="lg:w-[553px] lg:h-[136px] m-10 text-title text-[24px] text-left">
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
    <div className="lg:h-[633px] lg:w-[613px] lg:translate-x-[200px] ">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="relative">
          <img
            className="rounded-[20px] h-full w-full object-cover lg:h-[400px] lg:w-[400px]"
            src={images.bef1}
            alt="before"
          />
          <div className="absolute top-3 left-3 bg-gray-700 text-white px-2 py-1 rounded-[10px]">
            Before
          </div>
        </div>

        <div className="grid grid-rows-2 gap-2">
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
            <div className="absolute top-3 left-3 bg-gray-700 text-white px-2 py-1 rounded-[10px]">
              After 3 months
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
	