import images from "../../../assets";

export const TitleStud = () => {
  return (
    <section className=" ">
      <div className="lg:flex lg:flex-row md:grid-cols-1 gap-8 items-center max-w-screen-lg mx-auto p-[30px]">
        <div className=" ">
          <img
            className="lg:w-[450px] lg:h-[240px] md:w-[450px] md:h-[240px] w-[358px] h-[191px]   "
            src={images.ProductStud}
            alt="ProductStud"
          />
        </div>

        <div className="  grid lg:grid-row-2 lg:w-[690px] lg:h-[222px] md:w-[684px] md:h-[170px] ">
          <h1 className=" lg:text-[70px] text-[40px]  text-black text-title">
            Studies
          </h1>
          <p className=" lg:text-[30px] text-[24px] text-title">
            Dive into the science behind this versatile
            technology, understanding its principles, properties, and diverse
            applications.
          </p>
        </div>
      </div>
    </section>
  );
};
