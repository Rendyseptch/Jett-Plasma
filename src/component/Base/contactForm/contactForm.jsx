import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const fields = [
  {
    label: "First Name",
    type: "text",
    placeholder: "Enter First Name",
    required: true,
    gridCols: 1,
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Enter Last Name",
    required: true,
    gridCols: 1,
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Enter Email Address",
    required: true,
    gridCols: 2,
  },
  {
    label: "Phone",
    type: "tel",
    placeholder: "Enter Phone Number",
    required: true,
    gridCols: 2,
  },
  {
    label: "Message",
    type: "textarea",
    placeholder: "Enter your message",
    required: true,
    gridCols: 2,
  },
];

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  max-w[1200px] mx-auto"
      >
        <div className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-3 lg:w-[619px] md:w-auto  ">
          {fields.map((field, index) => (
            <div
              key={index}
              className={`text-left flex flex-col gap-2 w-full ${
                field.gridCols === 2 ? "md:col-span-2" : ""
              }`}
            >
              <label className="font-semibold">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  {...register(field.label.toLowerCase().replace(/ /g, "_"), {
                    required: field.required,
                  })}
                  className={`border border-[#1C1E22] text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md py-3 px-4 focus:border-gray-600 bg-[#F8F5EF]`}
                  placeholder={field.placeholder}
                //   style={(
                //     caret
                //   )}
                />
              ) : (
                <input
                  {...register(field.label.toLowerCase().replace(/ /g, "_"), {
                    required: field.required,
                  })}
                  className={`border border-[#1C1E22] text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-[10px] py-3 px-4 focus:border-gray-600 bg-[#F8F5EF]`}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              )}
              {errors[field.label.toLowerCase().replace(/ /g, "_")] && (
                <span className="text-black">This field is required</span>
              )}
            </div>
          ))}
        </div>
        <div className="w-full text-left">
          <button
            type="submit"
            className="flex justify-center items-center gap-2 w-[117px] py-3 px-4 bg-black text-white text-md  border-gray-600 rounded-[60px] ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-gray-600"
            title="Submit Form"
          >
            <span>send</span>
            <HiOutlineArrowCircleRight size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};
