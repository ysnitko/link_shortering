import React from "react";
import CardStatistics from "../CardStatistics/CardStatistics";

const StatisticsComponent = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center bg-bg-statistics">
      <div className="w-4/5 flex flex-col items-center gap-3">
        <h1 className="text-[40px] font-bold text-text-clr-headers">
          Advanced Statistics
        </h1>
        <p className="text-[18px] font-[500] text-text-clr-maincomponent px-80 text-center leading-8 mb-20">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <CardStatistics />
      </div>
    </section>
  );
};

export default StatisticsComponent;
