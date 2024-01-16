import React from 'react';

import Card from '../Card/Card';

const ShortenComponent = () => {
  return (
    <div className="-translate-y-48 w-4/5 rounded-xl flex flex-col gap-6">
      <form className="w-full flex flex-row gap-6 justify-between items-center p-14 bg-bg-shorting bg-no-repeat bg-cover bg-bg-card rounded-xl">
        <label htmlFor="" className="w-full">
          <input
            type="text"
            name=""
            id=""
            className="w-full px-7 py-4 rounded-xl outline-none text-xl font-[500] text-text-clr-headers"
            placeholder="Shorten a link here..."
          />
        </label>
        <button className="bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover text-xl font-bold rounded-xl px-8 py-4 min-w-[9em]">
          Shorten It!
        </button>
      </form>
      <ul className="flex flex-col gap-4 h-auto">
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};

export default ShortenComponent;
