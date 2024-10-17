import React from "react";
import { product } from "../../../assets/dummy";

export const ProductCard = () => {
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 lg:w-[1240px] lg:h-[324px] bg-  md:h-[1000px] gap-6 p-5 max-w-screen-xl mx-auto ">
      {product.map((product, index) => (
        <div
          key={index}
        className="lg:w-[380px] lg:h-[324px] "
        >
          <img
            src={product.imgsrc}
            alt={product.description}
            className=" lg:w-[380px] lg:h-[250px] md:w-[322.15px] md:h-[283.91px] object-cover mx-auto"
          />
          <div className="p-4 ">
            <p className="text-gray-800 text-lg font-medium text-center">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
