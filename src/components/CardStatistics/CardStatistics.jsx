import React from "react";
import brand from "../../assets/images/icon-brand-recognition.svg";
import detailed from "../../assets/images/icon-detailed-records.svg";
import customizable from "../../assets/images/icon-fully-customizable.svg";

const CardStatistics = () => {
  const dataCard = [
    {
      imgUrl: `${brand}`,
      header: "Brand Racognition",
      textCard:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      imgUrl: `${detailed}`,
      header: "Detailed records",
      textCard:
        "Gain insights into eho is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      imgUrl: `${customizable}`,
      header: "Fully Customizable",
      textCard:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <ul className="w-full flex justify-between max-w-full">
      {dataCard.map((item, index) => {
        return (
          <li
            key={index}
            className="relative max-w-[350px] flex flex-col gap-4 bg-white rounded-md px-7 py-9"
          >
            <div className="absolute left-[28px] -top-11  w-[88px] h-[88px] rounded-full flex justify-center items-center bg-bg-card">
              <img
                src={item.imgUrl}
                className="w-[40px] mx-0 my-0"
                alt={item.header}
              />
            </div>

            <h1 className="text-[23px] mt-11 font-bold text-text-clr-headers">
              {item.header}
            </h1>
            <p className="text-text-clr-maincomponent leading-6">
              {item.textCard}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CardStatistics;
