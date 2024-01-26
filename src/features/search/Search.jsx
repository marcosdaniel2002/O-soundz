import { useState } from "react";
import { FaCompactDisc } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useGetSongSearch } from "./useGetSongSearch";
import { useSearchParams } from "react-router-dom";
import SongCard from "../../ui/SongCard";
import { useSong } from "../../context/SongContext";

function Search() {
  const [value, setValue] = useState("");
  const [params, setParams] = useSearchParams();
  const { data: playlist } = useGetSongSearch();
  const { handlePlaySong } = useSong();

  function handleSearchSong(e) {
    e.preventDefault();
    setParams({ song: value });
    setValue("");
  }

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 pb-20 lg:pb-8">
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
      {!playlist ? (
        <div className="mt-5 flex flex-col items-center justify-center gap-5">
          <FaCompactDisc className="animate-spin-slow text-9xl text-green-500" />
          <span className="text-xl font-bold text-white">
            Find your favorite songs or artists
          </span>
        </div>
      ) : (
        <main className="mb-5 flex flex-col items-center gap-8">
          <header>
            <h2 className="text-2xl font-semibold text-green-400">
              Search - {params.get("song")}
            </h2>
          </header>
          <section className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {playlist.tracks.map((track, i) => (
              <SongCard
                key={track.id}
                id={track.id}
                name={track.name}
                image={track.image}
                artist={track.artist}
                track={track.track}
                handlePlaySong={() => handlePlaySong(playlist, i)}
              />
            ))}
          </section>
        </main>
      )}
    </div>
  );
}

export default Search;
