import React from "react";
import images from "../../../assets";

export const CardVid = ({
  image,
  caption,
  link,
  className,
  description,
  texting,
  styleImage,
  durasi,
  position,
}) => {
  const PositionClass = position ? position:'';
  return (
    <div className="h-auto flex flex-col ">
      <div className={`${className} flex-shrink-0 relative `}>
        <img
          className={`${styleImage} w-full h-full object-cover rounded-[20px]`}
          src={image}
          alt="Jett Plasma"
        />
        <div className="absolute w-fit bottom-5 left-5 right-5 bg-[#1C1E2233] bg-opacity-30 text-white flex justify-between items-center p-4 rounded-[50px]  ">
          <a href={link} target="_blank" rel="noopener noreferrer  ">
            <div className="flex items-center ">
              <img
                className="flex justify-center items-center w-[40px] h-[40px] "
                src={images.Play}
                alt="play"
              />
              <span className=" ml-[20px] ">{caption ? caption : durasi}</span>
            </div>
          </a>
          <div className="px-4">{texting}</div>
        </div>

        <div
          className={`absolute ${PositionClass} w-[50px] h-[50px] `}
        >
          <div className="absolute bottom-[75px]  left-[530px] w-[50px] h-[50px]">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[40px] h-[40px]  "
                src={images.Download}
                alt="download"
              />
            </a>
          </div>
        </div>

        {description ? <div className="text-white">{description}</div> : null}
      </div>
    </div>
  );
};

