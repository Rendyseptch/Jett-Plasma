import { vidData } from "../../../assets/dummy";
import { ButtonLine } from "../../Base/button/buttonLine";
import { CardVid } from "../../Base/card_video/cardVid";

export const BoxVidStud = () => {
  return (
    <section className="bg-black h-full p-[50px] rounded-[50px] mt-[80px]">
      <div className=" max-w-[1440px] mx-auto 1 ">
        <h1 className=" text-white text-title lg:text-[50px] text-[30px] lg:p-[100px] p-[10px] w-auto">
          Check Out Our Exciting Videos on Jett plasma Applications
        </h1>
        <div className="grid grid-cols-3 gap-[40px] mt-[100px]">
          {vidData.map((vid, index) => (
            <CardVid
              {...vid} //destructure
              key={index}
              image={vid.imageSrc}
              caption={vid.caption}
              link={vid.link}
              className="w-full   "
              texting={vid.durasi}
              download="absolute "
              styleImage="h-[232px] gap-[100px]"
            />
          ))}
        </div>
        <div className=" flex justify-center mt-10">
          <ButtonLine />
        </div>
      </div>
    </section>
  );
};
