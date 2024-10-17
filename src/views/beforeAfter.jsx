import images from "../assets";
import Layout, { LayoutQna } from "../component/Base/layout";
import { Transformations } from "../component/Base/transformation/transforms";
import { ParentQnA } from "../component/Body/qAndAns/parentQnA";
import{Dtavr} from "../assets/dummy/transformData"



export const BeforeAfter = () => {
  return (
    <div>
      <Layout isShowFooter={true}>
        <div className=" max-w-[1200px] mx-auto">
          <h1 className=" text-[50px] font-medium text-black text-center pt-[90px]">
            Before And After
          </h1>
          <p className="text-black text-[25px] mx-auto text-center w-[900px]">
            Explore remarkable results achieved through cutting-edge technology
            and skilled expertise. Discover the journey of rejuvenation,
            enhancement, and restoration.
          </p>
          <Transformations data={ Dtavr}/>
          <layoutQna className=" p-[60px] " isShowQna={true}>
            <ParentQnA />
          </layoutQna>
        </div>
      </Layout>
    </div>
  );
};
// ini adalah 