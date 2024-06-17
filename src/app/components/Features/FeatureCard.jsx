import { features } from "../Data";

const FeatureCard = ({ feature, activeIndex }) => {
  return (
    <article className="p-2 flex gap-5 md:gap-10 m-7">
      <div className="w-[70%] h-full flex items-center justify-center lg:px-2 ">
        <div className="w-full max-w-lg h-96 md:h-[34rem] flex items-center justify-center ">
          <img className=" rounded-2xl" src={feature.image} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 md:gap-2 lg:hidden">
        {[...Array(features.length)].map((_, i) => (
          <button
            className={`h-2 md:h-3 ${
              i !== activeIndex ? "w-2 md:w-3" : "w-6 md:w-10"
            } rounded-full bg-neutral-500 origin-left transition-all duration-150`}
          ></button>
        ))}{" "}
      </div>

      <div className="flex lg:w-[70%] flex-col gap-3 md:gap-10 lg:px-2 lg:justify-center ">
        {feature.heading()}

        <p className="max-w-sm lg:max-w-md lg:px-0 lg:justify-center lg:flex">{feature.description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
