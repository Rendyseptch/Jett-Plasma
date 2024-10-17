import React from "react";
import { Navbar } from "../../navbar/navBar";
import { Footer } from "../../Body/footer/footer";
import { ParentQnA } from "../../Body/qAndAns/parentQnA";
import { BottomContc } from "../../Body/boxlast/contactUs";
// import { ParentQnA } from "../../Body/qAndAns/parentQnA";

 function Layout({ children, isShowFooter = false }) {
  return (
    <div className="  !h-full  ">
      <Navbar />
      {children}
      {isShowFooter && <Footer />}
    </div>
  );
}
export default Layout



export function LayoutQna( children , isShowQna = false) {
  return (
    <div className=" !h-full" >
      <ParentQnA />
      {isShowQna && <BottomContc/> }
      {children}
    </div>
  )
}
// export function LayoutContactUs( Contact , isShowContact = false) {
//   return (
//     <div className=" !h-full" >
//       {isShowContact &&  <BottomContc />}
//       {Contact}
//     </div>
//   )
// }


