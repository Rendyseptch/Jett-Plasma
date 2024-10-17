import React from "react";

const Card = ({
  seriNumb,
  title,
  imageurl,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className="w-auto lg:h-[630px] md:w-[327px] mg:h-[377px]  h-[570px] items-center  md:translate-x-[20px]  p-[10px] ">
      {imageurl && (
        <img
          className="lg:w-[380px] lg:h-[380px] md:w-[327px] md:h-[327px] w-[356px] h-[356px]  object-fill bg-black rounded-[10px]"
          src={imageurl}
          alt={title}
        />
      )}
      <div className="p-4">
        <h2 className=" text-sm">{seriNumb}</h2>
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        <p className=" mt-2">{description}</p>
      </div>
      {buttonText && onClick && (
        <div className="p-4">
          <button
            onClick={onClick}
            className="w-[126px] h-[40px] px-[20px] gap-[4px] rounded-[30px] border-[1px] border-black"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
