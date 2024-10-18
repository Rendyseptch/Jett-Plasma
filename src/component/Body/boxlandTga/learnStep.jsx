import React from "react";

export const ParentBT = () => {
  return (
    <div>
      <LearnStep />
      <div>
        <TitleHead />
      </div>
    </div>
  );
};

export const LearnStep = () => {
  return (
    <button
      type="button"
      className=" w-[151px] h-[40px] px-[20px] gap-[4px] rounded-[30px] border-[1px] border-white text-white text-title"
    >
      How It Works
    </button>
  );
};

export const TitleHead = () => {
  return (
    <div className=" lg:w-[1220px] h-full md:w-[684px] md:h-[282px] lg:mb-[200px]  ">
      <h1 className="text-title lg:text-[80px] md:text-[30px] text-[30px] space-x-1 text-white ">
        Plasma Unveiled: Understanding the Science Behind Jett Plasma Pen
        Medical
      </h1>
      <div className="lg:w-[710px] lg:h-[80px] md:w-[684px] text-white">
        <h2 className="text-title lg:text-[30px] text-[24px] pt-[20px] ">
          Plasma is one of the four fundamental states of matter, the others
          being solid, liquid, and gas.
        </h2>
      </div>
    </div>
  );
};
