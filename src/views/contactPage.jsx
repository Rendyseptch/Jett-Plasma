import images from "../assets";
import { ContactForm } from "../component/Base/contactForm/contactForm";
import Layout from "../component/Base/layout";
import ContactUs from "../component/navbar/contact";

export const ContactPage = () => {
  return (
    <div>
      <Layout isShowFooter={true}>
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2  grid grid-cols-1 max-w-[1200px] mx-auto">
          {/* Form di kiri dan gambar di kanan untuk md dan lebih besar */}
          <div className="flex flex-col items-center justify-center pt-[90px] md:order-1 order-2">
            <ContactUs className="" />
            <div className="lg:w-[619px] lg:h-[216px] md:w-[300px] md:h-auto ">
              <h1 className="text-[70px] text-black ">Let’s get in touch!</h1>
              <span className="text-[20px] p-3">
                Have questions? We’re here to help. Send us a message and we’ll
                respond within 24 hours.
              </span>
            </div>
            <ContactForm />
          </div>

         
          <div className="flex justify-center items-center md:order-2 order-1">
            <img
              className="w-[300px] h-auto mx-auto md:mx-[0] my-[100px] md:my-[0]"
              src={images.Product2}
              alt="Product"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};
