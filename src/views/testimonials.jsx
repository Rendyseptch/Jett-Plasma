import Layout from "../component/Base/layout";
import { TbQuote } from "react-icons/tb";

export const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      message:
        "We used the Jett Plasma Lift Medical for most of the transformations for our patients on the DSTV Mooimaak program. Amazing results!",
      name: "Maureen Allem",
      time: "6 months ago",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
    },
    {
      id: 2,
      message:
        "Jett Plasma Lift Medical is portable, easy to use, and the result is amazing. The main use in my clinic is for non-invasive blepharoplasty and skin tightening.",
      name: "Tadaaki Yamada",
      time: "6 months ago",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/3.webp",
    },
    {
      id: 3,
      message:
        "Jett Plasma Lift Medical is a revolutionary tool that I use in my aesthetic practise on daily basis. I use it for skin tightening, collagen stimulation, and the removal of minor skin imperfection and skin tags.",
      name: "Yvette Lamberts",
      time: "6 months ago",
      avatar: "https://tecdn.b-cdn.net/img/new/avatars/1.webp",
    },
  ];

  return (
    <div className="bg-[#f8f5f0] py-">
      <Layout isShowFooter={true}>
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 ">
            <div className="lg:col-span-1 pb-[40px] lg:text-left lg:translate-y-[160px] md:col-span-2">
              <h1 className="text-[30px] md:text-[40px] leading-tight pb-[20px] md:pb-[30px] pt-[30px] md:pt-[50px]">
                What <b>People</b> Say, <b>About</b> Us
              </h1>
              <p className="text-base md:text-lg text-[#6d6d6d]">
                Jett Plasma Lift Medical is the ultimate solution for all your
                eye care needs. Its versatility and effectiveness make it the
                go-to choice for eye care professionals who demand nothing but
                the best for their patients.
              </p>
            </div>

            {/* Testimonial Cards Section */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[60px] lg:pl-[80px]">
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white w-full p-[20px] md:p-[30px] rounded-[20px] shadow-lg flex flex-col"
                >
                  <TbQuote className="text-[40px] text-gray-400 mb-4" />
                  <p className="mb-4 text-[#4a4a4a]">{testimonial.message}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      className="w-[50px] md:w-[60px] rounded-full"
                      alt="Avatar"
                    />
                    <div>
                      <h2 className="font-bold text-lg">{testimonial.name}</h2>
                      <span className="text-gray-500 text-sm">
                        {testimonial.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
//  sjsjjdjdjdj