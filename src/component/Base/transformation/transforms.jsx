import React, { useState, useEffect } from "react";
import { MdArrowRight } from "react-icons/md";

export const Transformations = ({ title, data }) => {
  const [currentStages, setCurrentStages] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      const initialStages = {};
      data.forEach((stage) => {
        initialStages[stage.title] = stage.badges[0].label;
      });
      setCurrentStages(initialStages);
    }
  }, [data]);

  const handleStageChange = (stageTitle, badgeLabel) => {
    setCurrentStages((prev) => ({
      ...prev,
      [stageTitle]: badgeLabel,
    }));
  };

  return (
    <div className="max-w-[1220px] justify-center mx-auto pt-[50px]">
      {data.length > 0 && (
        <>
          {data.map((stage, stageIndex) => {
            const currentStage = currentStages[stage.title];
            const currentImage = stage.badges.find(
              (badge) => badge.label === currentStage
            )?.images;

            return (
              <div key={stageIndex}>
                <h2 className="text-[30px] mt-[30px]">{stage.title}</h2>
                <div className="grid grid-cols-[2fr_0.1fr_0.1fr_1.5fr] mb-[30px]">
                  <div className="relative flex">
                    <img
                      src={currentImage}
                      alt={currentStage}
                      className="w-[95%] rounded-[20px]"
                    />
                    <span className="absolute left-4 bg-gray-800 opacity-70 text-white text-[15px] px-2 py-2 mt-3 rounded-[56px]">
                      {currentStage}
                    </span>
                  </div>
                  <div className=" items-stretch gap-8">
                    <div className=" h-full flex flex-col justify-between">
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[2px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[2px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[2px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[2px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[2px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[2px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[2px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                      <div className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full"></div>
                    </div>
                  </div>

                  <div className="items-stretch gap-8">
                    <div className="h-full flex flex-col justify-between"></div>
                  </div>

                  <div className="flex flex-col justify-center h-full gap-8">
                    {stage.badges.map((badge, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleStageChange(stage.title, badge.label)
                        }
                        className={`text-left py-2 px-4 flex items-center ${
                          currentStage === badge.label
                            ? "font-bold"
                            : "font-normal"
                        }`}
                      >
                        <span className="flex items-center">
                          <MdArrowRight
                            className={`mr-2 ${
                              currentStage === badge.label
                                ? "text-black"
                                : "invisible"
                            }`}
                          />
                          {badge.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
