import React from "react";
import images from "../../assets";

const VerifImage = () => {
  return (
    <img
      className="lg:ml-24 lg:w-[232px] lg:h-[68px] py-1 gap-[30px] 
                md:w-[221px] md:h-[44px] 
                sm:w-[221px] sm:h-[44px] pl-6
                w-[221px] h-[44px] "
      src={images.verifImg}
      alt="VerifImage"
    />
  );
};

export const Verifcontent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center align-left max-w-[1240px] mx-auto">
      {/* Image Section */}
      <div className="md:mr-4">
        <VerifImage />
      </div>

      {/* Text Section */}
      <div className="mt-4 lg:mt-0">
        <p
          className="ml-4 pb-5 lg:h-[112px] lg:w-[606px]
                md:h-[96px] md:w-[684px]
                sm:h-[168px] sm:text-[16px] sm:w-[358px]
                pr-2"
        >
          A groundbreaking treatment for MGD, Blepharitis, Demodex, Chalazion,
          Trichiasis, Entropion, Ectropion, and Xanthelasma. Discover a
          breakthrough method to perform non-surgical Blepharoplasty, reduce
          fine lines and wrinkles, and remove benign vascular and skin lesions.
        </p>
      </div>
    </div>
  );
};
