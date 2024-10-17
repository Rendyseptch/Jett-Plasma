import React from "react";
import images from "../../../assets";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <section>
      <footer className="h-full  p-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1440px] justify-center items-start mx-auto rounded-[80px] pt-[50px]  gap-y-[50px]">
          <div>
            <img
              className="w-[100px] h-[30px] mb-[50px]"
              src={images.Logo}
              alt="logo"
            />
            <p className="text-black text-[16px]">
              Jett Plasma Lift Medical is backed by years of research and
              development, as well as numerous clinical studies, ensuring both
              safety and efficacy for patients. It is Health Canada approved
              (unlike most Plasma devices) and provides the most advanced
              technology and versatile treatment options in a medical Plasma
              device.
            </p>
            <div className="flex space-x-6 pt-[50px]">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400"
              >
                <FiFacebook />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400"
              >
                <AiOutlineLinkedin />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-400"
              >
                <FiYoutube />
              </a>
            </div>
          </div>

          <div className="lg:pl-[50px] ">
            <h2 className="text-title font-bold mb-[20px]">Contact</h2>
            <ul className="mb-[40px]">
              <li className="mb-[20px] text-sm sm:text-base">877-870-0105</li>
              <li className="mb-[20px] text-sm sm:text-base">
                inquiry@jettplasmaeye.com
              </li>
              <li className="mb-[20px] text-sm sm:text-base">
                90 Sheppard Ave East, #100A, Toronto, ON, M2N3A1
              </li>
            </ul>
          </div>

          <div className=" flex rpt-[30px] text-left ">
            <span>©All rights reserved</span>
            <a
              className="font-semibold text-neutral-600"
              href="https://tw-elements.com/"
            >
              {" "}
              JETT 2024
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
