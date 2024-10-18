import React from "react";
import images from "../../../assets";

export const ContentBox = () => {
  return (
    <section className="  grid grid-cols-1 lg:w-[725px] lg:h-[800px] w-[200px] h-auto items-center justify-center p-3 max-w-[1200px] ">
      <div className="pb-[80px] w-[358px]  ">
        <p className="lg:text-[18px] lg:w-[680px] md:w-[680px] text-[16px] text-title text-white w-[320px] p-[20px]   ">
          Jett Plasma Lift Medical is backed by years of research and
          development, as well as numerous clinical studies, ensuring both
          safety and efficacy for patients. It is Health Canada approved (unlike
          most Plasma devices) and provides the most advanced technology and
          versatile treatment options in a medical Plaslgma device.
          <ul className="list-disc space-y-1 lg:w-[680px] md:w-[680px] lg:pt-[20px] w-[340px] p-[20px]  ">
            <li>Health Canada approved</li>
            <li>Certified medical device</li>
            <li>Patented DC technology</li>
            <li>Plasma treatment</li>
            <li>Simple handling and control</li>
            <li>8 intensities</li>
            <li>6 metal heads for ablative and non-ablative procedures</li>
            <li>Safety, efficiency and speed</li>
            <li>Lightweight and portable</li>
          </ul>
        </p>
      </div>
      <div className=" relative lg:flex lg:flex-col md:flex md:flex-row  flex flex-row gap-[24px] flex-1 lg:right-[500px] ">
        <div
          className="h-[480px] lg:w-[395px]  flex items-center justify-center  z-50  "
          style={{ transform: "translateY(43.7786px) translateZ(6px)" }}
        >
          <img
            className="lg:absolute w-[197px] h-[1230px]  items-start   md:flex-row z-[2] lg:translate-y-[-600px] translate-x-[70px]  md:translate-y-[400px] translate-y-[300px] md:translate-x-[00px] md:justify"
            src={images.Product}
            alt="Product"
          />
        </div>
      </div>
      <div className=" "></div>
    </section>
  );
};
