import Image from "next/image";

import BannerBg from "@images/bannerBg.png";

const Banner = () => {
  return (
    <div className="relative flex items-center">
      <Image className="w-full" src={BannerBg} alt="BannerBg" />
      <div className="absolute left-[80px] md:left-[30px] text-white dark:text-black z-10">
        <div className="font-bold text-6xl sm:text-5xl xs:text-4xl mb-4">
          Discover, Create and
          <br /> Sell Your Own NFT.
        </div>
        <div className="flex gap-x-6">
          <button className="text-base text-purple font-bold bg-white dark:bg-black dark:text-lightGray py-3 px-7 rounded-[40px]">
            Discover
          </button>
          <button className="text-base text-white border border-white dark:bg-black dark:text-lightGray dark:border border-none font-bold py-3 px-7 rounded-[40px]">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
