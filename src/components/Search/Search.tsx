import Image from "next/image";
import SearchIcon from "@images/search.svg";

const Search = () => {
  return (
    <div className="flex gap-x-4 max-w-[461px] h-[56px] w-full bg-white dark:bg-lightPurple rounded-[35px] px-6">
      <Image src={SearchIcon} alt="SearchIcon" />
      <input
        className="w-full bg-transparent border-none focus-visible:outline-none"
        placeholder="Search item, Collection and Account."
      />
    </div>
  );
};

export default Search;
