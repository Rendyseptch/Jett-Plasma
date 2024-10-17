import React, { useState, useEffect } from "react";
import images from "../../assets";
import ContactUs from "./contact";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen) {
      // Disable body scroll when the sidebar is open
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when the sidebar is closed
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  };

  // menghilangkan body
  useEffect(() => {
    return () => {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  const navItem = [
    { Link: "Videos", path: "/videos" },
    { Link: "Studies", path: "/studies" },
    { Link: "Testimonials", path: "/testimonials" },
    { Link: "Before and After", path: "/before-and-after" },
    { Link: "About Us", path: "/about-us" },
  ];

  return (
    <div>
      <nav className=" w-full overflow-hidden justify-center mt-[40px]">
        <div className="  h-full top-0 left-0 px-[40px] flex justify-between items-center bg-white-300  z-[999] shadow-lg">
          <a href="/" className="flex items-center space-x-3">
            <img
              className="w-[100px] h-[30px] flex justify-between items-flex-shrink-0 mx-auto"
              src={images.Logo}
              alt="Jett Logo"
            />
          </a>

          <ul className="hidden lg:flex space-x-9 ml-8">
            {navItem.map(({ Link, path }) => (
              <li key={Link}>
                <button
                  onClick={() => navigate(path)} // Connect each item with navigate
                  className="hover:text-black text-gray-500"
                >
                  {Link}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <ContactUs />
          </div>

          <button className="lg:hidden z-1000" onClick={toggleNavbar}>
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div
          className={`fixed top-15 left-0 w-full h-screen bg-[#F8F5EF] z-[1000] flex flex-col items-center justify-center transition-transform duration-300 ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="space-y-6 text-center">
            {navItem.map(({ Link, path }) => (
              <li key={Link}>
                <a
                  href={path}
                  className="hover:text-black text-gray-500 text-lg"
                >
                  {Link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 lg:hidden  ">
            <ContactUs />
          </div>
        </div>
      </nav>
    </div>
  );
};
