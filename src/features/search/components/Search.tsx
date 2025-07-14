import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <form className="max-w-lg mx-auto">
      <label
        className="bg-secondary/30  shadow-2xs overflow-hidden rounded-lg flex items-center "
        htmlFor=""
      >
        <input
            
          className="py-1.5 border text-sm  rounded-l-lg border-border  flex-1 outline-none px-3"
          placeholder="Cari apa?"
          type="search"
        />
        <button className="px-3 cursor-pointer text-sm border-border text-gray-500 border-l-0 border py-1.5 bg-gray-100 rounded-r-lg flex h-full">
          <SearchIcon size={20} />
        </button>
      </label>
    </form>
  );
};

export default Search;
