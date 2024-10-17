import React from "react";
import images from "../../../assets";

export const Boxalandsat = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black w-full p-20 gap-2.5 lg:rounded-[80px] md:rounded-[40px] rounded-[40px] ">
        <ContentBox />
      </div>
    </div>
  );
};

export const ContentBox = () => {
  return (
    <div className="flex flex-col justify-center items-center md:p-0">
      <div className="flex lg:flex-row flex-col items-center">
        <div className="lg:w-[860px] lg:h-[470px]">
          <h1
            className="text-white lg:w-[860px] md:w-[684px] sm:w-[358px] 
          lg:h-[470px] md:h-[120px] sm:h-[200px] 
          lg:text-[80px] md:text-[30px] sm:text-[30px] text-[30px]
          font-title"
          >
            Elevate Your Aesthetics without the AC: The Unmatched Benefits of DC
            Current in Plasma Treatment
          </h1>
        </div>

        <div className="lg:flex-col md:flex md:flex-row items-center md:space-x-4 lg:w-[260px] lg:h-[388px]">
          <div>
            <img
              className="mb-3 mt-10 p-4 lg:h-auto"
              src={images.picjetplasma}
              alt="gambar jet"
            />
          </div>

          <div
            className="lg:h-[252px] md:h-[144px] sm:h-[358px] 
                          lg:w-[260px] md:w-[400px] sm:w-[144px]"
          >
            <p className="text-white text-left lg:text-[18px] text-[16px]">
              Not all plasma pens are created equal! The Jett Plasma Pen Plasma
              has emerged as the gold standard for use in ophthalmology,
              aesthetics, and dermatology, thanks to its superior precision and
              ability to perform both ablative and non-ablative procedures.
            </p>
          </div>
        </div>
      </div>

      {/* PicPen is now displayed below the ContentBox */}
      <div className="mt-10 flex justify-center">
        <PicPen />
      </div>
    </div>
  );
};

export const PicPen = () => {
  return (
    <div>
      <div
        className="mt-8 pt-20
     "
      >
        <img
          className=" w-[358px] h-[156px] sm:w-[358px] sm:h-[156px] md:w-[684px] md:h-[298px] lg:w-[1034px] lg:h-[446px]"
          src={images.pen}
          alt="pen"
        />
      </div>
      <div className=" pt-5 lg:w-[860px] lg:h-[224px] md:w-[684px] md:h-[216px] sm:w-[358px] sm:h-[408  px]">
        <p className=" text-white text-[18px]">
          The Jett Plasma Pen's unique and patented use of direct current (DC)
          offers a more stable and controlled energy output when compared to
          (AC)alternating current. DC provides the accuracy essential for
          delicate procedures such as non-surgical blepharoplasty, dry
          eye/MGD/blepharitis treatment, skin tightening, and easy removal of
          benign vascular and skin lesions. By nature of plasma dispersal, AC
          devices are less predictable and precise, leading to a higher risk of
          complications and uneven results. DC technology reduces downtime and
          the risk of scarring, resulting in more natural-looking results for
          patients. The Jett Plasma Pen is the ideal choice for tightening the
          upper and lower eyelids and reducing the appearance of crow's feet and
          under-eye wrinkles.
        </p>
      </div>
    </div>
  );
};
