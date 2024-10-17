import React from "react";
import images from "../../../assets";
import { CiDroplet } from "react-icons/ci";
import { TbRipple, TbGrowth, TbBandage } from "react-icons/tb";

export const Revolutions = () => {
  return (
    <div className="">
      <div className="lg:w-[1240px] lg:h-[1450px] md:h-[1400px] justify-center min-h-screen items-center relative mx-auto max-w-screen-xl p-[20px] ">
        <h1 className="text-[30px] lg:text-[50px] font-title pb-[20px] ">
          Revolutionizing Eye Care: The Unmatched Versatility of the Jett Plasma
          Pen
        </h1>
        <RevolutionsOne />
        <RevolutionsTwo />
      </div>
    </div>
  );
};

export const RevolutionsOne = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 gap-8 items-center sm:flex-col pt-[10px] sm:p-[20px]">
      <div className="relative flex-1 order-1 lg:order-1 md:order-1 sm:order-1">
        <div className="absolute inset-0 lg:w-[calc(100%-80px)] w-[calc(100%-80px)] lg:h-full md:w-[293px] md:h-[246px] bg-black rounded-[30px] "></div>
        <img
          className="relative w-[300px] h-auto lg:w-[646px] lg:h-[480px] md:w-[331px] md:h-[246px] sm:bg-center sm:w-[331px] sm:h-auto "
          src={images.revolutonsOne}
          alt="RevolutionsOne"
        />
      </div>
      <div className=" order-2 lg:order-2  md:order-2 sm:order-2">
        <p className=" text-title text-black lg:text-[18px] lg:w-[570px] lg:h-[252px] md:w-[331.47px] md:h-[246px]  sm:h-[312px] sm:w-[358px] text-[16px] p-[20px] ">
          The Jett Plasma Pen's ability to perform both ablative and
          non-ablative procedures sets it apart from other plasma pens. Ablative
          treatments remove the outer layer of skin, stimulating the body's
          natural healing process and promoting collagen production.
          Non-ablative treatments, on the other hand, work beneath the skin's
          surface to tighten and rejuvenate the skin without causing damage to
          the outer layer. This versatility allows for a wide range of eye care
          procedures to be performed, all with minimal downtime and discomfort
          for the patient.
        </p>
      </div>
    </div>
  );
};

export const RevolutionsTwo = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-col-1 grid grid-col-1 gap-8 items-center md:pt-[100px] pt-[50px] p-[20px] ">
      <div className="relative order-2 lg:order-2 md:order-2 sm:order-1 md:top-[-30px] left-[100px]  ">
        <div className="absolute inset-0 lg:w-[calc(100%-80px)] w-[calc(100%-80px)] h-full bg-black rounded-[30px] z-[1]"></div>
        <img
          className="relative w-[300px] h-auto right-[80px] lg:w-[646px] lg:h-[480px] md:w-[293px] md:h-[246px]  sm:w-[331px] sm:h-auto z-[2] "
          src={images.revolutonsTwo}
          alt="RevolutionsTwo"
        />
      </div>

      <div className="order-2 lg:order-1 md:order-1 sm:order-1 ">
        <p className="text-title text-black lg:text-[18px] lg:w-[570px] lg:h-[248px] md:w-[331.47px] md:h-[246px] sm:h-[312px] sm:w-full  md:flex-col text-[16px] text-title md:mt-[-100px] mt-[10px] grid grid-cols-1">
          Jett Plasma Pen Medical is unique in that it can effectively treat MGD
          and Blepharitis. The patented non-ablative metal heads use DC micro
          discharges and pulsed DC microcurrents resulting in:
          <p className="pt-[20px] flex items-top gap-2">
            <CiDroplet className="w-6 h-6 md:w-7" />A phase shift in the Meibum
            (liquefaction)
          </p>
          <p className="pt-[20px] flex items-top gap-2">
            <TbGrowth className="w-14 h-14 md:w-20" />
            Depolarization of the cell membrane, resulting in cell regeneration,
            loosening of compacted meibum, influx of intercellular water and
            micronutrients, and reduced inflammation
          </p>
          <p className="pt-[20px] flex items-top gap-2">
            <TbBandage className="w-17 h-10 md:w-9" />
            Micro thrombosis of telangiectatic and inflamed blood vessels
          </p>
          <p className="pt-[20px] flex items-top gap-2">
            <TbRipple className="w-10 h-7 md:w-20" />
            An astringent effect causing contraction and expansion of the
            Meibomian Glands, which results in pushing the liquefied meibum into
            the intercellular space
          </p>
        </p>
      </div>
    </div>
  );
};
