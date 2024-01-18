import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <header className="flex justify-center items-center text-text-clr-primary font-[700] text-[16px] pt-14 max-[600px]:pt-10 max-[600px]:text-white max-[600px]:text-[18px] ">
      <nav className="relative flex justify-between items-center w-4/5 max-[600px]:w-[90%] gap-12">
        <img src={logo} alt="logo" className="place-content-end" />
        <div
          className={
            isShowMenu
              ? "w-full justify-between flex max-[600px]:absolute max-[600px]:bg-bg-card max-[600px]:rounded-xl max-[600px]:flex-col max-[600px]:top-14 max-[600px]:px-8 max-[600px]:py-10"
              : "w-full flex justify-between max-[600px]:hidden  max-[600px]:absolute max-[600px]:bg-bg-card max-[600px]:rounded-xl max-[600px]:flex-col max-[600px]:top-14 max-[600px]:px-8 max-[600px]:py-10"
          }
        >
          <ul className="flex gap-6 items-center max-[600px]:flex-col max-[600px]:gap-7 max-[600px]:pb-9 max-[600px]:border-b-[1px] max-[600px]:border-b-gray-600">
            <li className="hover:text-text-header-link-hover hover:cursor-pointer  max-[600px]:hover:text-text-clr-maincomponent">
              Features
            </li>
            <li className="hover:text-text-header-link-hover hover:cursor-pointer max-[600px]:hover:text-text-clr-maincomponent">
              Pricing
            </li>
            <li className="hover:text-text-header-link-hover hover:cursor-pointer max-[600px]:hover:text-text-clr-maincomponent">
              Resources
            </li>
          </ul>
          <div className="flex gap-8 max-[600px]:flex-col max-[600px]:items-center max-[600px]:gap-6 max-[600px]:pt-4">
            <button className="flex items-center rounded-3xl px-6 py-2">
              Login
            </button>
            <button className="flex items-center rounded-3xl bg-btn-bg hover:bg-btn-header-hover text-text-btn-hover px-6 py-2 max-[600px]:w-full max-[600px]:justify-center max-[600px]:py-3">
              Sign up
            </button>
          </div>
        </div>
        <button
          className=" hidden p-2 max-[600px]:flex  rotate-90 gap-4 w-12 text-text-clr-maincomponent text"
          onClick={showMenu}
        >
          | | |
        </button>
      </nav>
    </header>
  );
};

export default Header;
