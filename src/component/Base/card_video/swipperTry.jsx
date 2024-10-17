import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { CardVid } from "./cardVid";

function SwiperTry({ cards, headingText }) {
  const swiperRef = useRef(null);

  const nextVid = () => {
    swiperRef.current.swiper.slideNext();
  };

  const prevVid = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="bg-black lg:rounded-[80px] rounded-[30px] w-full p-[10px]  pb-[50px] mt-10 ">
      <h1 className="text-white  text-[30px] lg:text-[40px] md:text-[30px] text-left items-center md:w-[684px] sm:w-[358px] max-w-[1200px] mx-auto pt-[50px]   p-2 ">
        {headingText}
      </h1>
      <div className="flex items-center justify-center flex-col lg:p-[30px] md:p-[30px] p-[10px]">
        <Swiper
          ref={swiperRef}
          breakpoints={{
            // Responsive breakpoints
            340: {
              // Minimum screen size of 340px, show 2 slides
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              // Minimum screen size of 700px, show 3 slides
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true, // Enable clickable pagination
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <CardVid
                image={card.image}
                durasi={card.durasi}
                link={card.link}
                styleImage="rounded-lg h-[200px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button group for navigation and "See More" */}
        <div className="flex justify-between w-full mt-6 md:mr-[5%] lg:mr-0 lg:justify-center gap-5">
          
          {/* Prev and Next buttons (appear only on medium screens) */}
          <button
            onClick={prevVid}
            className="lg:hidden md:flex lg:text-[32px] text-[16px] lg:w-[50px] lg:h-[50px] w-[24px] h-[24px] p-2 rounded-full border border-white flex justify-center items-center text-white"
          >
            &#x3C;
          </button>
          <button
            onClick={nextVid}
            className="lg:hidden md:flex lg:text-[32px] text-[16px] lg:w-[50px] lg:h-[50px] w-[24px] h-[24px] p-2 rounded-full border border-white flex justify-center items-center text-white"
          >
            &#x3E;
          </button>

          {/* "See More" button */}
          <button
            type="button"
            className="text-white  w-[121px] text-[16px] auto h-[40px] px-[20px] gap-[4px] rounded-[30px] border-[1px] border-white items-center md:ml-auto md:self-start lg:self-center lg:mx-auto"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwiperTry;
