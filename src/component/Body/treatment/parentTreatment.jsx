import React, { useState } from "react";
import { CardVid } from "../../Base/card_video/cardVid";
import { VidList } from "../../../assets/dummy";

export const Treatment = () => {
  const [currentVid, setCurrentIndex] = useState(0);

  const nextVid = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === VidList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVid = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? VidList.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="lg:h-[850px] w-full text-center relative">
      <div>
        <h1 className="text-[50px]">Jett Plasma in Aesthetics</h1>
      </div>

      <div className="relative w-full flex justify-center items-center pt-[70px]">
        <div className="pl-[300px] w-full overflow-hidden flex items-center relative">
          <div
            className="flex transition-transform duration-1500 ease-in-out"
            style={{
              transform: `translateX(-${currentVid * 33.31}%)`,
              width: `${VidList.length * 100}%`,
            }}
          >
            {VidList.map((item, index) => (
              <CardVid
                key={index}
                image={item.image}
                caption={item.caption}
                link={item.link}
                className={`lg:w-[820px] lg:h-[500px] w-[276px] h-[168px] lg:mr-[30px] `}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-5">
        <button
          onClick={prevVid}
          className="text-[32px] w-[50px] h-[50px] p-2 rounded-full border border-black flex justify-center items-center"
        >
          &#x3C;
        </button>
        <button
          onClick={nextVid}
          className="text-[32px] w-[50px] h-[50px] p-2 rounded-full border border-black flex justify-center items-center"
        >
          &#x3E;
        </button>
      </div>
    </section>
  );
};
