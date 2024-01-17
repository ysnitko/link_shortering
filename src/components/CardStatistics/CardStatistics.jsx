import React from "react";
import brand from "../../assets/images/icon-brand-recognition.svg";
import detailed from "../../assets/images/icon-detailed-records.svg";
import customizable from "../../assets/images/icon-fully-customizable.svg";

const CardStatistics = () => {
  return (
    <ul className="w-full flex max-w-full items-center justify-center pb-28 max-[600px]:flex-col">
      <li className="relative max-w-[350px] flex flex-col gap-4 bg-white rounded-md px-7 py-9">
        <div className="absolute left-[28px] -top-11  w-[88px] h-[88px] rounded-full flex justify-center items-center bg-bg-card max-[600px]:left-[37%]">
          <img
            src={brand}
            className="w-[40px] mx-0 my-0"
            alt="Brand Racognition"
          />
        </div>
        <h1 className="text-[23px] mt-11 font-bold text-text-clr-headers max-[600px]:text-center">
          Brand Racognition
        </h1>
        <p className="text-text-clr-maincomponent leading-6 max-[600px]:text-center">
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </li>
      <li className="h-2 w-8 bg-btn-bg max-[600px]:h-14 max-[600px]:w-2"></li>
      <li className="relative max-w-[350px] flex flex-col gap-4 bg-white rounded-md px-7 py-9 mt-24 max-[600px]:mt-10">
        <div className="absolute left-[28px] -top-11  w-[88px] h-[88px] rounded-full flex justify-center items-center bg-bg-card max-[600px]:left-[37%]">
          <img
            src={detailed}
            className="w-[40px] mx-0 my-0"
            alt="Detailed records"
          />
        </div>
        <h1 className="text-[23px] mt-11 font-bold text-text-clr-headers max-[600px]:text-center">
          Detailed records
        </h1>
        <p className="text-text-clr-maincomponent leading-6 max-[600px]:text-center">
          Gain insights into who is clicking your links. Knowing when and where
          people engage whith your content inform better dicisions.
        </p>
      </li>
      <li className="h-2 w-8 bg-btn-bg max-[600px]:h-14 max-[600px]:w-2"></li>
      <li className="relative max-w-[350px] flex flex-col gap-4 bg-white rounded-md px-7 py-9 mt-48 max-[600px]:mt-10">
        <div className="absolute left-[28px] -top-11  w-[88px] h-[88px] rounded-full flex justify-center items-center bg-bg-card max-[600px]:left-[37%]">
          <img
            src={customizable}
            className="w-[40px] mx-0 my-0"
            alt="Fully Customizable"
          />
        </div>
        <h1 className="text-[23px] mt-11 font-bold text-text-clr-headers max-[600px]:text-center">
          Fully Customizable
        </h1>
        <p className="text-text-clr-maincomponent leading-6 max-[600px]:text-center">
          Improve brand awareness and contetn discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </li>
    </ul>
  );
};

export default CardStatistics;
