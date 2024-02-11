"use client";
import { useState } from "react";
import AuctionCard from "../AuctionCard/AuctionCard";

import { NFT } from "@utils/types";

type ChipPropTypes = {
  label: string;
  active: boolean;
  onSelectedChip: () => void;
};

const chips = [
  { id: 1, label: "Art" },
  { id: 2, label: "Music" },
  { id: 3, label: "Collectibles" },
  { id: 4, label: "Utility" },
];

const Chip = ({ label, active, onSelectedChip }: ChipPropTypes) => {
  return (
    <div
      onClick={onSelectedChip}
      className={`text-sm text-${active ? "purple" : "gray"} ${
        active ? "bg-lightPurple" : ""
      } font-medium px-3 py-1.5 hover:bg-lightPurple hover:text-purple rounded-[30px] cursor-pointer`}
    >
      {label}
    </div>
  );
};

type AuctionsListPropTypes = {
  nfts: NFT[];
};

const AuctionsList = ({ nfts }: AuctionsListPropTypes) => {
  const [selectedChip, setSelectedChip] = useState(1);
  return (
    <div>
      <div className="flex items-center justify-between my-8">
        <div className="font-bold text-2xl text-black dark:text-lightGray">
          Trending Auctions
        </div>
        <div className="flex items-center gap-x-5">
          {chips.map((chip) => {
            const { id, label } = chip;
            return (
              <Chip
                key={id}
                label={label}
                active={id === selectedChip}
                onSelectedChip={() => setSelectedChip(id)}
              />
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-6">
        {(nfts || []).map((nft) => (
          <AuctionCard key={nft?.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default AuctionsList;
