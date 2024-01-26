import { FaHeart } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { useCollection } from "../context/CollectionContext";
import { useState } from "react";
import ButtonPlaySong from "./ButtonPlaySong";

function SongCard({ id, name, image, artist, handlePlaySong, track }) {
  const { likesSongs, handleToggleLikeSong } = useCollection();
  const [isLike, setIsLike] = useState(
    likesSongs.tracks.some((song) => song.id === id),
  );

  function onToggleLike() {
    handleToggleLikeSong({ id, name, image, artist, track }, !isLike);
    setIsLike((prev) => !prev);
  }

  return (
    <div className="group relative max-w-[250px] overflow-hidden rounded-xl shadow-xl lg:max-w-[288px]">
      <div className="relative">
        <ButtonPlaySong onClick={handlePlaySong} />
        <button
          className="absolute right-1 top-1 rounded-full bg-neutral-900/90 p-2 transition-opacity group-hover:opacity-100 lg:opacity-0"
          onClick={onToggleLike}
        >
          <FaHeart
            className={`${isLike ? "text-green-400/80" : "text-slate-400/80"}`}
          />
        </button>
        <button className="absolute bottom-1 right-1 rounded-full bg-neutral-900/90 p-1.5 transition-opacity group-hover:opacity-100 lg:opacity-0">
          <MdMoreHoriz className="text-xl text-slate-400/80" />
        </button>
        <img src={image} alt={name} />
      </div>
      <div
        className={`absolute top-0 -z-10 h-full w-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex w-full flex-col px-4 py-2.5 backdrop-blur-2xl">
        <span className="truncate text-sm font-bold text-white/90">{name}</span>
        <span className="truncate text-xs font-semibold text-white/75">
          {artist}
        </span>
      </div>
    </div>
  );
}

export default SongCard;
