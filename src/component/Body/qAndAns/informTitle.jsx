import React from "react";

export const InfoormTittle = () => {
  return (
    <div className="lg:w-[290px] lg:h-[464px] md:w-auto md:h-[132px] items-start ">
      <Qna />
      <h1 className="lg:text-[50px] md:text-[40px] text-[30px] text-title">
        Quick answer to questions you may have
      </h1>
      <Ket />
    </div>
  );
};

const Qna = () => {
  return (
    <button
      type="button"
      className="lg:w-[126px] lg:h-[40px] md:w-[78px] md:h-[40px] px-[20px] gap-[4px] rounded-[30px] border-[1px] border-black"
    >
      QnA
    </button>
  );
};

export const Ket = () => {
  return (
    <div className="lg:w-[290px] lg:h-[492px]  md:w-[684px] md:h-[24px]  text-[16px]">
      <p className=" lg:text-[18px]  md:text-[16px] text-title ">
        Can’t find what you’re looking for? Contact us here:{" "}
        <a
          href="mailto:info@jettplasmaeye.com"
          className="text-blue-600 underline md:text-[18px] text-[16px] text-title lg:w-[290px] lg:h-[492px] md:w-[684px] md:h-[24px]"
        >
          info@jettplasmaeye.com
        </a>
      </p>
    </div>
  );
};
