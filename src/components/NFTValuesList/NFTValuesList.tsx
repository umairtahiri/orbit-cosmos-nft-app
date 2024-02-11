import NFTValueCard from "../NFTValueCard/NFTValueCard";

import EthBlueIcon from "@images/ethereum-blue.svg";

const values = [
  {
    label: "Revenue",
    value: "5.00",
    icon: EthBlueIcon,
    unit: "ETH",
    up: true,
    percentage: "12.3",
  },
  {
    label: "Revenue",
    value: "2.00",
    icon: EthBlueIcon,
    unit: "ETH",
    up: true,
    percentage: "8.1",
  },
  {
    label: "ROI",
    value: "+14.02",
    unit: "%",
    up: false,
    percentage: "5.1",
  },
  {
    label: "Estimated",
    value: "7.00",
    icon: EthBlueIcon,
    unit: "ETH",
    up: true,
    percentage: "3.2",
  },
];

const NFTValuesList = () => {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-1 grid-rows-2">
      {values.map((value) => (
        <NFTValueCard key={value?.label} {...value} />
      ))}
    </div>
  );
};

export default NFTValuesList;
