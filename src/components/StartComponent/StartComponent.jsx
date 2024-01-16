import React from 'react';

const StartComponent = () => {
  return (
    <section className="w-4/5 h-screen flex flex-col justify-start mx-0 my-auto">
      <div className="max-w-[600px] mt-36">
        <h1 className="text-[5rem] font-bold text-text-clr-headers leading-[5.5rem]">
          More than just shorter links
        </h1>
        <p className="text-[1.4rem] font-[500] text-text-clr-maincomponent">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="flex items-center bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover mt-10 text-xl font-bold rounded-3xl px-8 py-3">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default StartComponent;
