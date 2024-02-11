"use client";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import UserSwitch from "../UserSwitch/UserSwitch";

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stroke-[#000] dark:stroke-[#fff]"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

type NavDrawerPropTypes = {
  open: boolean;
  onClose: () => void;
};

const NavDrawer = ({ onClose, open }: NavDrawerPropTypes) => {
  return (
    <nav
      className={`fixed flex flex-col justify-between h-screen overflow-y-auto bg-white dark:bg-[#080f15] z-10 top-0 left-0 transition-all ${
        open ? "translate-x-[-25rem]" : "-translate-x-0"
      }`}
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute right-[12px] top-[12px] inline-block p-4 ml-auto text-text-primary"
        >
          <CloseIcon />
        </button>
        <Sidebar />
      </div>
    </nav>
  );
};

export default NavDrawer;
