import Image from "next/image";
import VoteUp from "@images/up-vote.svg";
import VoteDown from "@images/down-vote.svg";

type NFTValuesListPropTypes = {
  label: string;
  value: string;
  icon?: string;
  unit: string;
  up: boolean;
  percentage: string;
};

const NFTValueCard = ({
  label,
  value,
  icon,
  unit,
  up,
  percentage,
}: NFTValuesListPropTypes) => {
  return (
    <div className="min-w-[164px] min-h-[167px] bg-white dark:bg-darkTheme-lightDark rounded-xl p-5">
      <div className="text-gray text-sm font-bold">{label}</div>
      <div className="flex gap-y-2 my-4">
        {icon && <Image src={icon} alt="EthBlueIcon" />}
        <div className="text-black dark:dark:text-lightGray font-bold text-2xl">
          {value} <span className="text-gray text-sm">{unit}</span>
        </div>
      </div>
      <div className="w-full py-3 px-6 text-gray text-base flex items-center justify-center gap-x-2 border border-[#E9E9E9] rounded-xl">
        {up ? (
          <Image src={VoteUp} alt="VoteUp" />
        ) : (
          <Image src={VoteDown} alt="VoteDown" />
        )}
        {percentage}%
      </div>
    </div>
  );
};

export default NFTValueCard;
