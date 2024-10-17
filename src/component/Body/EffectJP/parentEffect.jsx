import React from "react";
import { GalleryText } from "../EffectJP/gridEffect";
import { ContentSuitable } from "../EffectJP/contentSutable";
import { ProductCard } from "../EffectJP/productCard";

export const ParentEffectJP = () => {
  return (
    <section className="  lg:h-[1800px] md:h-[2700px]">
      <TitleJP />
      <div>
        <GalleryText />
        <TitleSuitable />
        <ContentSuitable />
        <ProductCard />
      </div>
    </section>
  );
};

export const TitleJP = () => {
  return (
    <div className=" lg:w-[1240px] lg:h-[128px] justify-between  items-center relative mx-auto max-w-screen-xl mb-[70px] ">
      <div className="lg:w-[700px] lg:h-[128px] md:w-[616px] md:h-[80px] lg:text-center text-left m-[20px] lg:m-[150px] md:m-[50px]">
        <h1 className=" lg:text-[50px] md:text-[30px] text-[30px] text-title md:text-left">
          Physiological and Therapeutic Effects of Jett Plasma Pen
        </h1>
      </div>
    </div>
  );
};
export const TitleSuitable = () => {
  return (
    <div className="flex lg:w-[1240px] lg:h-[128px] w-[300px] h-[40px]  justify-between items-center mx-auto ">
      <div className="lg:w-[700px] lg:h-[128px] md:w-[616px] md:h-[80px] text-center m-[20px] md:m-[50px]">
        <h1 className=" lg:text-[50px] md:text-[30px] text-[30px] text-title ">
          Suitable for
        </h1>
      </div>
    </div>
  );
};
