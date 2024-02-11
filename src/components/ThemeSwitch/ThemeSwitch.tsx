"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LightModeIcon from "@images/light-mode.svg";
import LightModeActiveIcon from "@images/light-mode-active.svg";
import DarkModeActiveIcon from "@images/dark-mode-active.svg";
import DarkModeIcon from "@images/dark-mode.svg";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (newTheme: string) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    toggleTheme(newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      toggleTheme(storedTheme);
    } else {
      toggleTheme(
        window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, []);

  return (
    <div className="flex items-center bg-[#f1f1f1] dark:bg-lightPurple p-2 rounded-[45px] w-[56px] h-[30px]">
      {isDarkMode && (
        <label
          htmlFor="switch"
          className="cursor-pointer"
          onClick={handleToggle}
        >
          <Image src={LightModeIcon} alt="DarkModeIcon" />
        </label>
      )}
      <input
        type="checkbox"
        id="switch"
        className="hidden"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <div
        className={`transition-transform duration-300 cursor-pointer ${
          isDarkMode ? "translate-x-0.5" : "translate-x-0"
        }`}
        onClick={handleToggle}
      >
        <Image
          src={isDarkMode ? DarkModeActiveIcon : LightModeActiveIcon}
          alt="DarkModeIcon"
        />
      </div>
      {!isDarkMode && (
        <label
          htmlFor="switch"
          className="cursor-pointer"
          onClick={handleToggle}
        >
          <Image src={DarkModeIcon} alt="DarkModeIcon" />
        </label>
      )}
    </div>
  );
};

export default ThemeSwitch;
