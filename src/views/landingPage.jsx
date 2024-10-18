import React from "react";
// import { Navbar } from "../component/navbar/navBar.jsx";
import { Verifcontent } from "../component/Body/verived.jsx";
import images from "..//assets/index.jsx";
import { Boxalandsat } from "../component/Body/boxlandsat/boxalandsat.jsx";
import { ParentBoxLand } from "../component/Body/boxlanddua/boxlanddua.jsx";
import { Revolutions } from "../component/Body/revolutions/revolutons.jsx";
import { BoxlandTga } from "../component/Body/boxlandTga/boxlandTga.jsx";
import { ParentEffectJP } from "../component/Body/EffectJP/parentEffect.jsx";
import { BoxAbout, Boxspace } from "../component/Body/Box/box.jsx";
import { Treatment } from "../component/Body/treatment/parentTreatment.jsx";
import { ParentQnA } from "../component/Body/qAndAns/parentQnA.jsx";
import { BoxContact } from "../component/Body/boxlast/contactUs.jsx";
// import { Footer } from "../component/Body/footer/footer.jsx";
import Layout from "../component/Base/layout/index.jsx";
import { Boxlanduatitik } from "../component/Body/boxlanddua/boxlanddua.jsx";

//  className="App overflow-x-hidden bg-gray-100 w-screen md:w-full  "
export const LandingPage = () => {
  return (
    <Layout isShowFooter>
      <div className="  px-4 md:px-[40px] flex flex-col md:flex-row justify-between items-center relative mx-auto max-w-screen-xl">
        <div className=" relative md:left text-center md:text-left max-w-[900px] font-title">
          <h1
            className="
          font-plus-jakarta font-medium text-left 
          lg:text-[70px] md:text-[40px] sm:text-[40px] 
          text-[40px] 
           "
          >
            Eyes, Meet Jett Plasma Pen
          </h1>
          <h2
            className="lg:text-[30px] md:text-[24px]  md:h[40px] mt-7
          sm:text-[24px] text-[24x] text-left"
          >
            The first and only plasma pen specifically designed for eye care
            procedures.
          </h2>
          <ExploreButton />

          <img
            className="lg:w-[990px] lg:h-[381.33px]
             md:w-[588px] md:h-[224px]  
             sm:w-[587px] sm:h-[224px] sm:align-left mx-auto"
            src={images.alat}
            alt="Jett Logo"
          />
        </div>
      </div>

      <Verifcontent />
      <Boxalandsat />
      <ParentBoxLand />
      <Revolutions />
      <BoxlandTga />
      <ParentEffectJP />
      <BoxAbout />
      <Boxspace />
      <Treatment />
      <ParentQnA />
      <BoxContact />
    </Layout>
  );
};

export const ExploreButton = () => {
  return (
    <div className="flex justify-between items-center relative mx-auto max-w-[1280px] mt-6">
      <button className="bg-blue-400 hover:bg-sky-700 text-white w-[178px] h-[50px] gap[4px] rounded-[30px] left-5">
        Explore Product
      </button>
    </div>
  );
};
