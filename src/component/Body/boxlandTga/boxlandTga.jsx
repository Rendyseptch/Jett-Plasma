import React from "react";
import { ParentBT } from "./learnStep";
import { PlasmaUnievedOne } from "./pengenalan";
import { PlasmaData } from "../../../assets/dummy";

export const BoxlandTga = () => {
 
  return (
    <div className="grid-col-1 bg-[#41C0F0] w-full lg:rounded-[80px] md:rounded-[40px] rounded-[40px] lg:h-[2000px] md:h-[2000px] pt-[50px] h-[3550px] ">
      <div className="px-4 md:px-[40px] flex flex-col justify-start items-center mx-auto max-w-screen-xl h-full p-[50px]">
        <div>
          <ParentBT />
        </div>
        {PlasmaData.map((data, index) => (
          <div>
            <PlasmaUnievedOne
              key={index}
              imageSrc={data.imageSrc}
              description={data.description}
              className={`flex ${
                index % 2 === 0
                  ? "lg:flex-row md:flex-row  flex-col"
                  : " lg:flex-row-reverse md:flex-row-reverse flex-col"
              }`}
              // className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} ${index === 0 ? "mt-[200px]" : ""} ${index === PlasmaData.length - 1 ? "w-full" : "w-1/2"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
