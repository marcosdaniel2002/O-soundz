import { useState } from "react";
import { FaCompactDisc } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useGetSongSearch } from "./useGetSongSearch";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [value, setValue] = useState("");
  const [params, setParams] = useSearchParams();

  function handleSearchSong(e) {
    e.preventDefault();
    setParams({ song: value });
    setValue("");
  }

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8">
      <form onSubmit={handleSearchSong}>
        <div className="flex items-center gap-3 rounded-lg bg-white/90 p-3">
          <FaSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search artists or songs"
            className="w-full bg-transparent outline-none"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </form>
      <div className="mt-5 flex flex-col items-center justify-center gap-5">
        <FaCompactDisc className="animate-spin-slow text-9xl text-green-500" />
        <span className="text-xl font-bold text-white">
          Find your favorite songs or artists
        </span>
      </div>
    </div>
  );
}

export default Search;
