import Image from "next/image";

import EutheriumIcon from "@images/Ethereum.svg";
import AddIcon from "@images/add.svg";
import NextIcon from "@images/next.svg";
import SmallEthIcon from "@images/Ethereum-ETH-small.svg";
import LargeEthIcon from "@images/Ethereum-ETH.svg";

const BalanceCard = () => {
  return (
    <div className="relative p-3 w-full h-[220px] rounded-2xl bg-gradient-to-bl from-[#5429FF] to-[#BBAAFF] flex flex-col items-center justify-between">
      <div className="text-[#E0DEE5] text-xs mb-2 pt-6">Your Balance</div>
      <div className="text-white font-bold text-3xl">1,034.02</div>
      <div className="flex items-center gap-x-2 my-5">
        <Image
          src={EutheriumIcon}
          alt="EutheriumIcon"
          width={20}
          height={20}
          className="bg-white rounded-full p-0.5"
        />
        <span className="text-xs text-white font-medium">ETH</span>
      </div>
      <button className="bg-white dark:bg-black z-10 flex h-12 w-full gap-x-4 xl:gap-x-2 items-center rounded-xl px-3">
        <Image src={AddIcon} alt="AddIcon" />
        <span className="text-black dark:text-lightGray font-bold text-sm whitespace-nowrap">
          Top Up Balance
        </span>
        <Image src={NextIcon} alt="NextIcon" />
      </button>
      <Image
        src={SmallEthIcon}
        alt="SmallEthIcon"
        className="absolute top-0 right-[24px]"
      />
      <Image
        src={LargeEthIcon}
        alt="SmallEthIcon"
        className="absolute bottom-[24px] left-[20px]"
      />
    </div>
  );
};

export default BalanceCard;
