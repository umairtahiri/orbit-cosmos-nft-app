"use client";
import { useState } from "react";

const UserSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className="flex items-center w-fit bg-[#f1f1f1] dark:bg-lightPurple p-2 rounded-[45px] h-[56px]">
      {isChecked && (
        <label
          htmlFor="switch"
          onClick={handleToggle}
          className="text-gray text-base font-medium py-2 px-5 cursor-pointer"
        >
          Users
        </label>
      )}
      <input
        type="checkbox"
        id="switch"
        className="hidden"
        checked={isChecked}
      />
      <div
        className={`text-purple bg-white dark:bg-lightPurple text-base font-medium py-2 px-5 rounded-[40px] text-center transition-transform duration-300 cursor-pointer ${
          isChecked ? "translate-x-0.5" : "translate-x-0"
        }`}
        onClick={handleToggle}
      >
        {isChecked ? "Creators" : "Users"}
      </div>
      {!isChecked && (
        <label
          htmlFor="switch"
          onClick={handleToggle}
          className="text-gray text-base font-medium py-2 px-5 cursor-pointer"
        >
          Creators
        </label>
      )}
    </div>
  );
};

export default UserSwitch;
