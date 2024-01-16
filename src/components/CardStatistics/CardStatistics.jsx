import React from "react";
import brand from "../../assets/images/icon-brand-recognition.svg";
import detailed from "../../assets/images/icon-detailed-records.svg";
import customizable from "../../assets/images/icon-fully-customizable.svg";

const CardStatistics = () => {
  return (
    <ul className="w-full flex max-w-full items-center justify-center">
      <li className="relative max-w-[350px] flex flex-col gap-4 bg-white rounded-md px-7 py-9">
        <div className="absolute left-[28px] -top-11  w-[88px] h-[88px] rounded-full flex justify-center items-center bg-bg-card ">
          <img
            src={brand}
            className="w-[40px] mx-0 my-0"
            alt="Brand Racognition"
          />
        </div>
        <h1 className="text-[23px] mt-11 font-bold text-text-clr-headers">
          Brand Racognition
        </h1>
        <p className="text-text-clr-maincomponent leading-6">
          "Boost your brand recognition with each click. Generic links don't
          mean a thing. Branded links help instil confidence in your content."
        </p>
      </li>
      <li className="h-2 w-8 bg-btn-bg"></li>
      <li className="relative max-w-[350px] flex flex-col gap-4 bg-white rounded-md px-7 py-9 mt-24">
        <div className="absolute left-[28px] -top-11  w-[88px] h-[88px] rounded-full flex justify-center items-center bg-bg-card ">
          <img
            src={detailed}
            className="w-[40px] mx-0 my-0"
            alt="Detailed records"
          />
        </div>
        <h1 className="text-[23px] mt-11 font-bold text-text-clr-headers">
          Detailed records
        </h1>
        <p className="text-text-clr-maincomponent leading-6">
          "Boost your brand recognition with each click. Generic links don't
          mean a thing. Branded links help instil confidence in your content."
        </p>
      </li>
      <li className="h-2 w-8 bg-btn-bg"></li>
      <li className="relative max-w-[350px] flex flex-col gap-4 bg-white rounded-md px-7 py-9 mt-48">
        <div className="absolute left-[28px] -top-11  w-[88px] h-[88px] rounded-full flex justify-center items-center bg-bg-card ">
          <img
            src={customizable}
            className="w-[40px] mx-0 my-0"
            alt="Fully Customizable"
          />
        </div>
        <h1 className="text-[23px] mt-11 font-bold text-text-clr-headers">
          Fully Customizable
        </h1>
        <p className="text-text-clr-maincomponent leading-6">
          "Boost your brand recognition with each click. Generic links don't
          mean a thing. Branded links help instil confidence in your content."
        </p>
      </li>
    </ul>
  );
};

export default CardStatistics;
