import React from "react";

const BoostLinkComponent = () => {
  return (
    <section className="w-full flex flex-col py-14 bg-bg-card justify-center items-center gap-5 bg-bg-boost-desktop bg-no-repeat bg-cover max-[600px]:bg-bg-boost-mob max-[600px]:py-24">
      <h1 className="text-[2.5rem] text-white font-bold max-[600px]:text-[1.7rem]">
        Boost your links today
      </h1>
      <button className="flex items-center bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover text-xl font-bold rounded-3xl px-8 py-3">
        Get Started
      </button>
    </section>
  );
};

export default BoostLinkComponent;
