import Image from "next/image";
import { NFT } from "@utils/types";

import EthIcon from "@images/Ethereum.svg";
import ClockIcon from "@images/clock.svg";
import AvatarIcon from "@images/avatar.png";

type AuctionCardPropTypes = {
  nft: NFT;
};

const AuctionCard = ({ nft }: AuctionCardPropTypes) => {
  const { url } = nft;
  return (
    <div className="bg-white dark:bg-darkTheme-lightDark rounded-2xl p-3 flex flex-col">
      <div className="flex items-center justify-center relative mb-6">
        <Image
          className="w-full h-[196px] object-cover rounded-2xl"
          width={324}
          height={196}
          src={url}
          alt="MonkeyImg"
        />
        <button className="text-base z-10 text-purple font-bold bg-white dark:bg-black dark:text-lightGray py-3 px-7 absolute top-50% right-50%  rounded-[40px]">
          Place a Bid
        </button>
        <div className="bg-[#16161629] py-1.5 px-2.5 flex items-center gap-x-2 absolute bottom-4 left-4 rounded-[20px]">
          <Image src={ClockIcon} alt="ClockIcon" />
          <div className="text-white">12: 03: 45</div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 p-3">
        <div className="flex items-center justify-between">
          <div className="text-black dark:text-lightGray font-bold text-2xl">
            Ape In Love
          </div>
          <div className="text-gray text-base">21,5K Likes</div>
        </div>
        <div className="flex items-center gap-x-2">
          <Image src={AvatarIcon} alt="AvatarIcon" />
          <div className="text-base text-gray">@johnti60</div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray front-bold text-base">Current Bid</div>
          <div className="text-base text-gray flex items-center gap-x-1">
            <Image src={EthIcon} alt="EthIcon" />
            <span className="font-bold text-black dark:text-lightGray">
              9.10
            </span>{" "}
            ETH
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
