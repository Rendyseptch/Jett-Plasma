// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
// import "swiper/swiper-bundle.css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { CardVid } from "./cardVid";

// export const CardSwiper = ({ cards }) => {
//   return (
//     <div className="relative">
//       <Swiper
//         slidesPerView={1} // Number of cards shown at once (for mobile)
//         spaceBetween={10}
//         pagination={{
//           clickable: true,  // Enable pagination dots
//         }}
//         navigation={true}  // Enable navigation arrows
//         modules={[Pagination, Navigation]} // Import Pagination and Navigation modules
//         breakpoints={{
//           640: {
//             slidesPerView: 2, // Show 2 cards for tablet
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3, // Show 3 cards for desktop
//             spaceBetween: 30,
//           },
//         }}
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide key={index}>
//             <CardVid
//               image={card.image}
//               caption={card.caption}
//               link={card.link}
//               description={card.description}
//               texting={card.texting}
//               styleImage="rounded-lg h-[200px]"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* "See More" button */}
//       <div className="flex justify-center mt-4">
//         <button className="bg-white text-black py-2 px-6 rounded-full">See More</button>
//       </div>
//     </div>
//   );
// };