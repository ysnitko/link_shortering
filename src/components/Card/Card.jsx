import React from 'react';

const Card = ({ linkName, id, copyLink, copied, linkResult }) => {
  return (
    <li className="w-full flex bg-white rounded-md justify-between items-center px-6 py-4 max-[600px]:flex-col max-[600px]:items-start overflow-hidden ">
      <span className="block  text-text-clr-headers text-xl font-[500] max-[600px]:block max-[600px]:text-base max-[600px]:justify-start overflow-hidden overflow-ellipsis text-nowrap max-[600px]:max-w-full max-[600px]:pb-[0.5rem] max-[600px]:border-b-[1px]  max-[600px]:border-x-text-clr-maincomponent max-[600px]:w-full">
        {linkName}
      </span>
      <div className="flex gap-6 items-center max-[600px]:flex-col max-[600px]:w-full  max-[600px]:items-start max-[600px]:gap-3">
        <span className="block text-text-shortering text-xl font-[500] max-[600px]:text-base max-[600px]:pt-[1rem] ">
          {linkResult}
        </span>
        {copied ? (
          <button
            id={id}
            className="flex items-center rounded-md bg-bg-card hover:bg-btn-copied-hover text-text-btn-hover text-sm font-bold px-[22.6px] py-[0.6rem]  max-[600px]:w-full max-[600px]:justify-center"
            onClick={(event) => copyLink(event, linkResult)}
          >
            Copied!
          </button>
        ) : (
          <button
            id={id}
            className="flex items-center rounded-md bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover text-sm font-bold px-8 py-[0.6rem] max-[600px]:w-full max-[600px]:justify-center"
            onClick={(event) => copyLink(event, linkResult)}
          >
            Copy
          </button>
        )}
      </div>
    </li>
  );
};

export default Card;
