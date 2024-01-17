import React from "react";
import CardStatistics from "../CardStatistics/CardStatistics";
import ShortenComponent from "../ShortenComponent/ShortenComponent";

const StatisticsComponent = () => {
  return (
    <section className="w-full flex flex-col items-center bg-bg-statistics py-28 max-[600px]:pb-14">
      <ShortenComponent />
      <div className="w-4/5 flex flex-col items-center gap-3 -m-[5rem] max-[600px]:w-[90%] max-">
        <h1 className="text-[40px] font-bold text-text-clr-headers max-[600px]:text-[28px]">
          Advanced Statistics
        </h1>
        <p className="text-[18px] font-[500] text-text-clr-maincomponent px-[17rem] text-center leading-8 max-[600px]:text-[16px] max-[600px]:px-0 max-[600px]:mb-16">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <CardStatistics />
      </div>
    </section>
  );
};

export default StatisticsComponent;
