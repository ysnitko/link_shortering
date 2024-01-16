import React, { useState } from 'react';
import Card from '../Card/Card';
import { useRef } from 'react';

const ShortenComponent = () => {
  const [shortenLink, setShortenLink] = useState([]);
  const inputLink = useRef('');
  const onSumbit = (event) => {
    event.preventDefault();
    console.log(inputLink.current.value);
    setShortenLink((prev) => [...prev, inputLink.current.value]);
    console.log(shortenLink);
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    console.log(`'Copied the text: ' + ${link}`);
  };

  return (
    <div className="-translate-y-48 w-4/5 rounded-xl flex flex-col gap-6">
      <form
        className="w-full flex flex-row gap-6 justify-between items-center p-14 bg-bg-shorting bg-no-repeat bg-cover bg-bg-card rounded-xl"
        onSubmit={onSumbit}
      >
        <label htmlFor="link" className="w-full">
          <input
            ref={inputLink}
            type="text"
            name=""
            id="link"
            className="w-full px-7 py-4 rounded-xl outline-none text-xl font-[500] text-text-clr-headers"
            placeholder="Shorten a link here..."
          />
        </label>
        <button className="bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover text-xl font-bold rounded-xl px-8 py-4 min-w-[9em]">
          Shorten It!
        </button>
      </form>
      <ul className="flex flex-col gap-4 h-auto">
        {shortenLink.map((item, index) => {
          return (
            <Card key={index} item={item} id={index} copyLink={copyLink} />
          );
        })}
      </ul>
    </div>
  );
};

export default ShortenComponent;
