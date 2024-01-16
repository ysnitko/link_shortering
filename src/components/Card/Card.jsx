import React from 'react';

const Card = ({ item, id, copyLink }) => {
  return (
    <li className="w-full flex bg-white rounded-md justify-between items-center px-6 py-4">
      <span className="text-text-clr-headers text-xl font-[500]">{item}</span>
      <div className="flex gap-6 items-center">
        <span className="text-text-shortering text-xl font-[500]">
          https/:dsfdsgfdgfdgfdgfdgf.io
        </span>
        <button
          id={id}
          className="flex items-center rounded-md bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover text-sm font-bold px-8 py-[0.6rem]"
          onClick={() => copyLink(item)}
        >
          Copy
        </button>
      </div>
    </li>
  );
};

export default Card;
