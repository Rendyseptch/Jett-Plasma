import { Navbar } from "../component/navbar/navBar";
import { TitleStud } from "../component/Body/Studies/tittleStud";
import Layout, { LayoutContactUs } from "../component/Base/layout";
import Card from "../component/Base/card";
import { dataStudies, VidList } from "../assets/dummy";
import { ParentQnA } from "../component/Body/qAndAns/parentQnA";
import SwiperTry from "../component/Base/card_video/swipperTry";
import { BoxContact } from "../component/Body/boxlast/contactUs";

const handleButtonClick = () => {
  alert("Button clicked!");
};

export const Studies = () => {
  return (
    <div>
      <Layout isShowFooter={true}>
        <TitleStud />
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
              headingText="Check Out Our Exciting Videos on Jett Plasma Applications"
            />
          ))}
        </div>

        <SwiperTry cards={VidList} headingText="Check Out Our Exciting Videos on Jett plasma Applications" />

        <layoutQna className=" p-[60px]" isShowQna={true}>
          <ParentQnA />
          <BoxContact />
        </layoutQna>
      </Layout>
    </div>
  );
};
