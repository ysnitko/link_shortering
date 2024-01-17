import React from "react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-center text-text-clr-primary font-[700] text-[16px] pt-14 ">
      <nav className="flex justify-between items-start w-4/5 max-[600px]:w-[90%]">
        <ul className="flex gap-6 items-center">
          <li className="mr-4">
            <img src={logo} alt="logo" className="place-content-end" />
          </li>
          <li className="hover:text-text-header-link-hover max-[600px]:hidden">
            <a href="/"> Features</a>
          </li>
          <li className="hover:text-text-header-link-hover  max-[600px]:hidden">
            <a href="/">Pricing</a>
          </li>
          <li className="hover:text-text-header-link-hover  max-[600px]:hidden">
            <a href="/">Resources</a>
          </li>
        </ul>
        <div className="flex gap-8">
          <button className="flex items-center rounded-3xl px-6 py-2  max-[600px]:hidden">
            Login
          </button>
          <button className="flex items-center rounded-3xl bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover px-6 py-2 max-[600px]:hidden">
            Sign up
          </button>
          <button className="hidden px-6 py-2">|||</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
