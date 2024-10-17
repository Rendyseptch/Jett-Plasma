import images from "../assets";
import { dataStudies, VidList } from "../assets/dummy";
import Card from "../component/Base/card";
import { CardVid } from "../component/Base/card_video/cardVid";
import SwiperTry from "../component/Base/card_video/swipperTry";
import Layout from "../component/Base/layout";
import { BoxContact } from "../component/Body/boxlast/contactUs";
import { ParentQnA } from "../component/Body/qAndAns/parentQnA";

export const Videos = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Layout isShowFooter={true}>
        <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row max-w-[1200px] h-auto lg:h-[536px] mx-auto lg:gap-[10px] lg:pt-[50px] lg:pb-[50px]">
          <div className="flex-1 relative flex flex-col lg:w-[421px] lg:h-[128px] md:w-full md:h-auto lg:mt-[150px] md:mt-[20px] md:p-5 p-4 ">
            <h1 className="leading-[1] tracking-wide text-black text-[30px] md:text-[40px] lg:text-[50px] pt-[30px] lg:pt-[100px] mt-1 mb-1">
              Introducing JETT PLASMA...
            </h1>
            <p className="relative text-[18px] md:text-[20px] mt-[10px] w-full lg:w-[421px] lg:h-[322px] ">
              JETT is a brand providing Innovation, Reliability and Technology.
              Our R&D department continuously focuses its efforts on developing
              the right products in cooperation with leading experts in medical
              fields.
            </p>
          </div>

          <div className="  md:ml-[250px] pt-3 lg:w-[769px]  order-1">
            <CardVid
              image={images.PlasmaUnvield3}
              link="https://www.youtube.com/live/viOduLdgDgo?si=PZnseFZqWHNY09iW"
              styleImage="relative w-full lg:w-[769px] lg:h-[536px] md:h-[314px] h-[246px] p-2 rounded-[50px] md:w-[454px] gap-3"
              position="lg:bottom-[-10px] lg:right-[5%] md:right-[10%] md:bottom-[-10px] bottom-[-10px] right-[5%] "
            />
          </div>
        </div>
        <section>
          <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-center items-center mt-[90px] max-w-[1200px] mx-auto">
            {dataStudies.map((study, index) => (
              <Card
                key={index}
                title={study.title}
                seriNumb={study.seriNumb}
                description={study.description}
                imageurl={study.imageurl}
                buttonText="Learn More"
                onClick={handleButtonClick}
              />
            ))}
          </div>
        </section>

        <SwiperTry cards={VidList} headingText="Discover Our Latest Findings" />
        <layoutQna className=" p-[60px]" isShowQna={true}>
          <ParentQnA />
          <BoxContact />
        </layoutQna>
      </Layout>
    </div>
  );
};
