import React from "react";
import { HeadlineQnA } from "../../Base/qna";
import { InfoormTittle } from "./informTitle";
import { qnaData } from "../../../assets/dummy";

export const ParentQnA = () => {


  return (
<section className="p-[10px] max-w-[1200px] mx-auto">
      <div className="lg:grid lg:grid-cols-2 gap-8 md:flex md:flex-col lg:h-auto md:h-auto h-auto justify-start items-center">
        <div className="flex flex-col justify-start items-start lg:translate-x-[80px] lg:translate-y-[-20px] md:order-1">
          <InfoormTittle />
        </div>
        <div className="flex flex-col lg:translate-x-[-260px] md:order-2">
          <HeadlineQnA qnaData={qnaData} />
        </div>
      </div>
    </section>
  );
};
