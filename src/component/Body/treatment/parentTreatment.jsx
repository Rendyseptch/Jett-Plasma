import { VidList } from "../../../assets/dummy";
import SwiperLanding from "./boxCOvid_stud";

export const Treatment = () => {
  return (
    <section className="lg:h-[850px] w-full text-center relative">
      <div>
        <h1 className="text-[50px]">Jett Plasma in Aesthetics</h1>
      </div>

    
      <SwiperLanding cards={VidList} />
    </section>
  );
};
