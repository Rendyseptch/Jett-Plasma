import Layout from "../component/Base/layout";
import { SiMoleculer } from "react-icons/si";
import { BsPersonHeart } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import images from "../assets";
import { ParentQnA } from "../component/Body/qAndAns/parentQnA";
import { BoxContact } from "../component/Body/boxlast/contactUs";

export const AboutUs = () => {
  return (
    <div className="">
      <Layout isShowFooter={true}>
        <div className="max-w-[1200px] mx-auto items-center justify-center text-center pt-[230px] pb-[100px]">
          <h1 className="text-black text-[50px]">About Us</h1>
          <div className="flex justify-center gap-3">
            <div className="w-[30%] text-right">
              <p className="text-black">
                Jett Plasma is a non-invasive cosmetic procedure that utilizes
                plasma energy to treat various skin conditions and concerns.
              </p>
            </div>
            <div>
              <SiMoleculer className="text-sky-400 text-[60px]" />
            </div>
          </div>
        </div>

        <div className=" absolute z-[0] h-[300px] lg:h-[100px] left-[20px] 2xl:left-[150px] 4xl:left-[300px] flex items-center justify-center  hidden lg:flex">
          <img src={images.Product} alt="product" />
        </div>
        <section className="relative z-[10] w-full bg-sky-400 h-auto rounded-[80px] py-[50px] ">
          <div className="max-w-[1200px] mx-auto lg:flex lg:grid-cols-3 md:grid md:grid-cols-2 justify-center gap-[100px] flex-wrap ">
            {/* Card 1 */}
            <div className="flex justify-center items-center  ">
              <BsPersonHeart className="text-[30px] text-white" />
              <div className="text-left text-white">
                <h4 className="text-[60px] font-semibold">300</h4>
                <span className="">- Satisfied</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex justify-center items-center  lg:border-l lg:border-r lg:border-dashed md:border-white lg:px-[60px]">
              <MdKeyboardDoubleArrowDown className="text-[50px] text-white" />
              <div className="text-left text-white">
                <h4 className="text-[60px] font-semibold">4y+</h4>
                <span className="">- Experience</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex justify-center items-center ">
              <SlGraph className="text-[45px] text-white" />
              <div className="text-left text-white">
                <h4 className="text-[60px] font-semibold">30+</h4>
                <span className="">- Branch</span>
              </div>
            </div>
          </div>
        </section>
        <div className=" max-w-[1200px] mx-auto w-[700px] pt-[70px] pb-[250px]">
          <p className="">
            Jett Plasma Lift Medical is backed by years of research and
            development, as well as numerous clinical studies, ensuring both
            safety and efficacy for patients. It is Health Canada approved
            (unlike most Plasma devices) and provides the most advanced
            technology and versatile treatment options in a medical Plasma
            device.
          </p>
        </div>
        <layoutQna className="  " isShowQna={true}>
          <ParentQnA />
          <BoxContact />
        </layoutQna>
      </Layout>
    </div>
  );
};

