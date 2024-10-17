import React from "react";

export const PlasmaUnievedOne = ({ imageSrc, description, className }) => {
  return (
    <div
      className={`lg:flex lg:flex-row-2 md:flex md:flex-row-2 items-center mx-auto max-w-screen-xl mt-0 pt-[50px] ${className}`}
    >
      <div className="lg:grid lg:grid-cols-1 items-center sm:flex sm:flex-col">
        <img
          className={`rounded-[130px] ${
            className === "large-image"
              ? "lg:w-[600px] lg:h-[300px]"
              : "lg:w-[420px] lg:h-[162px]"
          }`}
          src={imageSrc}
          alt="PlasmaUnieved"
        />
      </div>
      <div className="lg:w-[760px] lg:h-[112px] m-[20px]">
        <p className="text-title text-white text-[18px]">{description}</p>
      </div>
    </div>
  );
};
