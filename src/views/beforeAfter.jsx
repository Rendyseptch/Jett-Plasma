import images from "../assets";
import Layout, { LayoutQna } from "../component/Base/layout";
import { Transformations } from "../component/Base/transformation/transforms";
import { ParentQnA } from "../component/Body/qAndAns/parentQnA";
import { Dtavr } from "../assets/dummy/transformData";
import { BoxContact } from "../component/Body/boxlast/contactUs";

export const BeforeAfter = () => {
  return (
    <div>
      <Layout isShowFooter={true}>
        <div className=" max-w-[1200px] mx-auto">
          <div className=" lg:w-full md:w-[680px]">
            <h1 className=" text-[50px] font-medium text-black text-center pt-[90px] items-center justify-center">
              Before And After
            </h1>
            <p className="text-black text-[25px] mx-auto text-center lg:w-[900px] md:w-[680px] ">
              Explore remarkable results achieved through cutting-edge
              technology and skilled expertise. Discover the journey of
              rejuvenation, enhancement, and restoration.
            </p>
          </div>
          <Transformations data={Dtavr} 
          className="md:pr-[200px]"/>
          <layoutQna className=" p-[60px] " isShowQna={true}>
            <ParentQnA />
          </layoutQna>
         
        </div>
        <BoxContact />
      </Layout>
    </div>
  );
};
// ini adalah
