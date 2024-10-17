import React from "react";
import images from "../../../assets";

export const ContentSuitable = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-[100px] justify-center items-start w-full max-w-[700px] mx-auto p-[20px]">
      {/* First Column */}
      <div className="">
        <img 
        className=" h-[45.9px] w-[32.89px]"
        src={images.vector} alt="vector" />
        <h1 className="text-[24px] text-title">Ablative Treatments</h1>
        <ul className="list-disc pl-5 space-y-1">
          <li>Removal of deep and shallow wrinkles</li>
          <li>Removal of warts, pigmentations, fibromas, couperosis, hemangiomas</li>
          <li>Scars correction</li>
          <li>Blepharoplasty</li>
          <li>Ectropion, Entropion, Xanthelasma</li>
          <li>Trichiasis, Distichiasis</li>
        </ul>
      </div>

      {/* Second Column */}
      <div className="pt-[60px]">
        <img 
        className="h-[45.9px] w-[32.89px]"
        src={images.vector1} alt="vector" />
        <h1 className="text-[24px] text-title">Non-Ablative Treatments</h1>
        <ul className="list-disc pl-5 space-y-1">
          <li>Face and body lifting</li>
          <li>Reduction of wrinkles</li>
          <li>Restoration of connective tissues</li>
          <li>Improvement of elasticity</li>
          <li>Blepharitis</li>
        </ul>
      </div>
    </div>
  );
};
