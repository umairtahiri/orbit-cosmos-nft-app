"use client";
import { useState } from "react";
import Image from "next/image";

import Search from "@/components/Search/Search";
import UserSwitch from "@/components/UserSwitch/UserSwitch";
import NavDrawer from "@/components/NavDrawer/NavDrawer";

import BellIcon from "@images/bell.svg";
import AvatarIcon from "@images/avatar.png";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleShowDrawer = () => setShowDrawer((show) => !show);

  return (
    <header className="p-6 fixed top-0 z-20 sm:gap-x-6 bg-[#F8F8F8] dark:bg-darkTheme-lightDark w-[-webkit-fill-available] flex  items-center justify-between">
      <MoreIcon active={showDrawer} onClick={toggleShowDrawer} />
      <NavDrawer open={showDrawer} onClose={toggleShowDrawer} />
      <Search />
      <div className="flex items-center gap-x-5">
        <div className="lg:hidden">
          <UserSwitch />
        </div>
        <div className="w-[56px] h-[56px] flex  items-center justify-center bg-white dark:bg-lightPurple border border-[#e9e9e9] rounded-full p-3">
          <Image src={BellIcon} alt="BellIcon" />
        </div>
        <Image src={AvatarIcon} className="lg:hidden" alt="AvatarIcon" />
      </div>
    </header>
  );
};

export default Header;

const MoreIcon = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return active ? (
    <button
      onClick={onClick}
      className="h-12 px-5 hidden lg:flex items-center justify-center gap-2 text-base font-medium text-nowrap outline-none rounded-full transition-all duration-300 disabled:opacity-50 group text-white bg-primary xs:hover:opacity-75 w-12 h-12 rounded-md !px-1 !bg-black dark:!bg-white/20"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="#fff"
          d="M4.306 18.219a1.043 1.043 0 1 0 1.475 1.475zm8.432-5.481a1.043 1.043 0 1 0-1.476-1.476zm-1.476-1.476a1.043 1.043 0 1 0 1.476 1.476zm8.432-5.48a1.043 1.043 0 0 0-1.475-1.476zm-6.956 5.48a1.043 1.043 0 1 0-1.476 1.476zm5.48 8.432a1.043 1.043 0 0 0 1.476-1.475zm-6.956-6.956a1.043 1.043 0 1 0 1.476-1.476zm-5.48-8.432A1.043 1.043 0 1 0 4.305 5.78zm0 15.388 6.956-6.956-1.476-1.476-6.956 6.957zm6.956-6.956 6.956-6.957-1.475-1.475-6.957 6.956zm-1.476 0 6.957 6.956 1.475-1.475-6.956-6.957zm1.476-1.476L5.78 4.306 4.306 5.78l6.956 6.957z"
        ></path>
      </svg>
    </button>
  ) : (
    <button
      onClick={onClick}
      className="h-12 px-5 hidden lg:flex items-center justify-center bg-primary w-12 h-12 rounded-md !px-1 bg-[#f4f4f5] dark:bg-gray-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          fill="#fff"
          stroke="#000"
          stroke-linecap="round"
          stroke-width="2"
          d="M20 5H4M20 12H4M20 19H4"
        ></path>
      </svg>
    </button>
  );
};
