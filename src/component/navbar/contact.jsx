import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate(); // Hook for navigating

  const handleClick = () => {
    navigate('/contact-form');
  };

  return (
    <button
      type="button"
      className=" w-[126px] h-[40px] px-[20px] gap-[4px] rounded-[30px] border-[1px] border-black"
      onClick={handleClick} // Attach the click handler
    >
      Contact Us
    </button>
  );
};

export default ContactUs;
