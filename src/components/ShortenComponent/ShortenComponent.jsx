import React, { useState, useRef } from "react";
import Card from "../Card/Card";

const ShortenComponent = () => {
  const [shortenLink, setShortenLink] = useState([]);
  const [copied, setCopied] = useState(false);
  const [isError, setIsError] = useState(false);
  const inputLink = useRef("");

  // const fetchData = async (longURL) => {
  //   await fetch('https://api-ssl.bitly.com/v4/shorten', {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: {
  //       Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       long_url: longURL,
  //       domain: 'bit.ly',
  //       group_guid: `${process.env.REACT_APP_GUID}`,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const new_link = data.link.replace('https://', '');
  //       fetch(
  //         `https://api-ssl.bitly.com/v4/bitlinks/${new_link}/qr?image_format=png`,
  //         {
  //           mode: 'cors',
  //           headers: {
  //             Authorization: `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`,
  //           },
  //         }
  //       )
  //         .then((response) => response.json())
  //         .then((result) => {
  //           console.log(result);
  //         });
  //     });
  // };

  const onSumbit = async (event) => {
    event.preventDefault();
    if (inputLink.current.value === "") {
      setIsError(true);
      return;
    } else {
      setIsError(false);
      setShortenLink([
        ...shortenLink,
        { id: Date.now(), linkName: inputLink.current.value, copy: false },
      ]);
      inputLink.current.value = "";
    }

    console.log(inputLink.current.value);
  };

  const copyLink = (event, link) => {
    navigator.clipboard.writeText(link);
    const targetId = +event.target.id;
    const targetElemIndex = shortenLink.findIndex(
      (item) => item.id === targetId
    );
    for (let index = 0; index < shortenLink.length; index++) {
      const element = shortenLink[index];
      element.copy = false;
      setShortenLink([...shortenLink]);
    }
    if (targetElemIndex !== -1) {
      const updateLink = [...shortenLink];
      updateLink[targetElemIndex].copy = !updateLink[targetElemIndex].copy;
      setShortenLink(updateLink);
      setCopied(!copied);
    }
    console.log(`'Copied the text: ' + ${link}`);
  };

  return (
    <div
      id="shortering-form"
      className="-translate-y-48 w-4/5 rounded-xl flex flex-col gap-6  max-[600px]:w-[90%]"
    >
      <form
        className="w-full flex flex-row gap-6 justify-between items-center p-14 bg-bg-shorting bg-no-repeat bg-cover bg-bg-card rounded-xl max-[600px]:flex-col max-[600px]:bg-bg-shorting-mob max-[600px]:p-7 max-[600px]:gap-9"
        onSubmit={onSumbit}
      >
        <label htmlFor="link" className="w-full relative flex">
          <input
            style={{ outlineColor: isError && "hsl(0, 87%, 67%)" }}
            ref={inputLink}
            type="text"
            name=""
            id="link"
            className={
              isError
                ? "w-full px-7 py-4 rounded-xl outline-none text-xl font-[500] text-text-clr-headers max-[600px]:rounded-[3px] max-[600px]:p-[10px] max-[600px]:text-base placeholder:text-outline-clr"
                : "w-full px-7 py-4 rounded-xl outline-none text-xl font-[500] text-text-clr-headers max-[600px]:rounded-[3px] max-[600px]:p-[10px] max-[600px]:text-base"
            }
            placeholder="Shorten a link here..."
          />
          {isError ? (
            <span className="absolute -bottom-6 text-[12px] italic text-outline-clr">
              Please add a link
            </span>
          ) : (
            ""
          )}
        </label>
        <button className="bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover text-xl font-bold rounded-xl px-8 py-4 min-w-[9em] max-[600px]:w-full max-[600px]:rounded-md max-[600px]:text-lg max-[600px]:py-[10px]">
          Shorten It!
        </button>
      </form>
      <ul className="flex flex-col gap-4 h-auto">
        {shortenLink
          .map((item) => {
            return (
              <Card
                key={item.id}
                linkName={item.linkName}
                id={item.id}
                copyLink={copyLink}
                copied={item.copy}
              />
            );
          })
          .reverse()}
      </ul>
    </div>
  );
};

export default ShortenComponent;
