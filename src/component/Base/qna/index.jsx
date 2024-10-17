import React, { useState } from "react";

export const HeadlineQnA = ({ qnaData }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleQuestion = (index) => {
    setActiveIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // Remove index if already active
          : [...prevIndexes, index] // Add index if not active
    );
  };

  return (
    <div className=" max-w-[850px] p-5 md:p-10 lg:p-12 mb-10 md:ml-[60px]">
      <div className="space-y-4">
        {qnaData.map((item, index) => (
          <div key={index}>
            {/* Question */}
            <div
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center pt-5 pb-2 border-t border-black cursor-pointer"
            >
              <div className="text-lg font-semibold w-auto">
                {item.question}
              </div>
              <div
                className={`text-xl transform transition-transform ${
                  activeIndexes.includes(index) ? "rotate-90" : ""
                }`}
              >
                {">"}
              </div>
            </div>
            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndexes.includes(index) ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="p-4">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
