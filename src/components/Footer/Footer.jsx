import React from "react";
import logo from "../../assets/images/logo_white.svg";
import { features } from "../../constants";
import { resources } from "../../constants";
import { company } from "../../constants";
import { labels } from "../../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-bg-footer flex justify-center text-white">
      <div className="w-4/5 flex flex-row justify-between py-16 max-[600px]:w-full max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center max-[600px]:gap-8">
        <img src={logo} className="max-w-[121px] max-h-[33px]" alt="logo" />
        <div className="flex gap-20 ml-[10rem] max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center max-[600px]:ml-0 max-[600px]:gap-9">
          <div className="flex flex-col max-[600px]:text-center">
            <p className="font-bold mb-6">Features</p>
            <ul className="flex flex-col text-text-clr-primary font-[500] gap-2">
              {features.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:text-text-shortering cursor-pointer max-[600px]:text-center"
                  >
                    {item.nameLink}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-bold mb-6">Resources</p>
            <ul className="flex flex-col text-text-clr-primary font-[500] gap-2 max-[600px]:text-center">
              {resources.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:text-text-shortering cursor-pointer"
                  >
                    {item.nameLink}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-bold mb-6">Company</p>
            <ul className="flex flex-col text-text-clr-primary font-[500] gap-2 max-[600px]:text-center">
              {company.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:text-text-shortering cursor-pointer"
                  >
                    {item.nameLink}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <ul className="flex gap-6 max-[600px]:mt-4">
          {labels.map((item, index) => {
            return (
              <li key={index} className="hover:cursor-pointer">
                <img src={item.urlCompany} alt={item.altText} />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
