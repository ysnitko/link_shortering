import React from 'react';
import logo from '../../assets/images/logo_white.svg';
import { features } from '../../constants';
import { resources } from '../../constants';
import { company } from '../../constants';
import { labels } from '../../constants';

const Footer = () => {
  return (
    <footer className="w-full bg-bg-footer flex justify-center text-white">
      <div className="w-4/5 flex flex-row justify-between py-16">
        <img src={logo} className="max-w-[121px] max-h-[33px]" alt="logo" />
        <div className="flex gap-20 ml-[10rem]">
          <div className="flex flex-col">
            <p className="font-bold mb-6">Features</p>
            <ul className="flex flex-col text-text-clr-primary font-[500] gap-2">
              {features.map((item, index) => {
                return <li key={index}>{item.nameLink}</li>;
              })}
            </ul>
          </div>
          <div>
            <p className="font-bold mb-6">Resources</p>
            <ul className="flex flex-col text-text-clr-primary font-[500] gap-2">
              {resources.map((item, index) => {
                return <li key={index}>{item.nameLink}</li>;
              })}
            </ul>
          </div>
          <div>
            <p className="font-bold mb-6">Company</p>
            <ul className="flex flex-col text-text-clr-primary font-[500] gap-2">
              {company.map((item, index) => {
                return <li key={index}>{item.nameLink}</li>;
              })}
            </ul>
          </div>
        </div>
        <ul className="flex gap-6">
          {labels.map((item, index) => {
            return (
              <li key={index}>
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
