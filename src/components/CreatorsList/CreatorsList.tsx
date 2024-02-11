import CreatorItem from "../CreatorItem/CreatorItem";
import { Creator } from "@utils/types";

type CreatorsListPropTypes = {
  topCreators: Creator[];
};

const CreatorsList = ({ topCreators }: CreatorsListPropTypes) => {
  return (
    <div className="bg-white dark:bg-darkTheme-lightDark rounded-2xl px-6 py-8">
      <div className="flex justify-between mb-8">
        <div className="text-black dark:text-lightGray dark:text-lightGray text-2xl font-bold">
          Top Creator
        </div>
        <div className="text-gray text-base font-medium cursor-pointer">
          See All
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        {(topCreators || []).map((creator) => (
          <CreatorItem key={creator?.id} creator={creator} />
        ))}
      </div>
    </div>
  );
};

export default CreatorsList;
