import Image from "next/image";

import BalanceCard from "@/components/BalanceCard/BalanceCard";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";
import AvatarIcon from "@images/avatar.png";

import { mainOptions, profileOptions, otherOptions } from "./options";
import { Option } from "./types";

import CompanyLogo from "@images/Logo.svg";
import UserSwitch from "../UserSwitch/UserSwitch";

const Sidebar = () => {
  const renderOptions = (options: Option[]) => {
    return options.map((option: Option) => {
      const { label, icon, isActive } = option;
      return (
        <div
          className="flex items-center gap-x-4 cursor-pointer"
          key={label}
          title={label}
        >
          <Image src={icon} alt="icon" />
          <div
            className={`text-${
              isActive ? "purple" : "gray"
            } text-base font-medium hover:text-purple`}
          >
            {label}
          </div>
        </div>
      );
    });
  };

  return (
    <aside className="bg-white dark:bg-darkTheme-lightDark w-[292px] lg:h-screen h-fit p-6 flex flex-col justify-between">
      <section>
        <div className="mb-8">
          <Image className="block" src={CompanyLogo} alt="CompanyLogo" />
        </div>
        <div className="flex flex-col gap-y-3 items-start">
          {renderOptions(mainOptions)}
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="text-xs font-bold text-black dark:text-lightGray mt-10 mb-4">
            PROFILE
          </div>
          {renderOptions(profileOptions)}
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="text-xs font-bold text-black dark:text-lightGray mt-10 mb-4">
            OTHER
          </div>
          <div className="flex justify-between">
            {renderOptions(otherOptions)}
            <ThemeSwitch />
          </div>
          <div className="items-center justify-between mt-4 hidden lg:flex">
            <Image
              src={AvatarIcon}
              className="hidden lg:block"
              alt="AvatarIcon"
            />
            <UserSwitch />
          </div>
        </div>
      </section>
      <section className="pt-10 lg:pb-4">
        <BalanceCard />
      </section>
    </aside>
  );
};

export default Sidebar;
