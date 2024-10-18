import React from "react";

export const BoxContact = () => {
  return (
    <div className=" bg-black w-full h-[352px] rounded-[70px] overflow-hidden">
      <div className="lg:grid lg:grid-cols-2 bg-black max-w-[1440px] flex justify-center items-center mx-auto  lg:rounded-[80px] md:rounded-[80px] ">
        <div className="flex flex-col items-left lg:translate-x-[70px] lg:gap-9 lg:w-[846px] lg:translate-y-[-100px] translate-y-[-40px] lg:h-[192px] md:w-[684px] md:h-[120px] w-[390px] h-[434px] md:flex-col lg:flex-row md:mt-[120px]">
          <h1 className=" relative justify-center p-[20px] leading-[1] text-[30px] lg:text-[50px] text-white text-left w-full h-[192px] ">
            Optimize Your Performance with Jett Plasma - The Latest Solution for
            Innovative Medical Procedures
          </h1>

          <div className="flex items-center justify-center mt-[80px] ">
            <BottomContc />
          </div>
        </div>
      </div>
      <div className="mt-4">
   
      </div>
    </div>
  );
};

export const BottomContc = () => {
  return (
    <button className="bg-blue-400 hover:bg-sky-700 text-white w-[178px] h-[50px] gap-4 rounded-[30px] mt-4  lg:translate-x-[200px]">
      Contact Us Now!
    </button>
  );
};
