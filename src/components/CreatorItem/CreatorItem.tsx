import Image from "next/image";
import { Creator } from "@utils/types";

import AvatarIcon from "@images/avatar.png";

type CreatorItemPropTypes = {
  creator: Creator;
};

const CreatorItem = ({ creator }: CreatorItemPropTypes) => {
  const { id, name, username } = creator;
  return (
    <div className="flex items-center gap-x-4 w-full">
      <div className="text-base text-black dark:text-lightGray font-bold">
        {id}.
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-x-6">
          <Image src={AvatarIcon} alt="AvatarIcon" />
          <div>
            <div className="text-base text-black dark:text-lightGray font-bold mb-1">
              {name}
            </div>
            <div className="text-xs text-gray">@{username}</div>
          </div>
        </div>
        <button className="w-[77px] h-[32px] text-sm text-purple bg-lightPurple font-medium px-3 py-1.5 rounded-[30px] cursor-pointer">
          Follow
        </button>
        {/* <button className="w-[77px] h-[32px] text-sm bg-purple text-white font-medium px-3.5 py-2 rounded-[30px] cursor-pointer">
        Following
      </button> */}
      </div>
    </div>
  );
};

export default CreatorItem;
