import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import SongAnimation from "../../ui/SongAnimation";
import { useSong } from "../../context/SongContext";
import { useState } from "react";
import { useCollection } from "../../context/CollectionContext";
import ButtonMore from "../../ui/ButtonMore";

function TableRow({ index, id, name, artist, image, track, handlePlaySong }) {
  const { currentSong, isPlay } = useSong();
  const isCurrentSong = currentSong?.id === id;

  const { likesSongs, handleToggleLikeSong } = useCollection();
  const [isLike, setIsLike] = useState(
    likesSongs.tracks.some((song) => song.id === id),
  );

  function onToggleLike() {
    handleToggleLikeSong({ id, name, image, artist, track }, !isLike);
    setIsLike((prev) => !prev);
  }

  return (
    <tr className="group/overlay odd:bg-neutral-700/30 hover:bg-neutral-600/40">
      <td
        className={`w-8 p-1.5 text-center text-xs ${
          isCurrentSong ? "text-green-500" : "text-white"
        }`}
      >
        {isCurrentSong && isPlay ? <SongAnimation /> : index + 1}
      </td>
      <td className="max-w-48 truncate p-1.5 text-xs">
        <div className="flex items-center gap-4">
          <div className="relative size-11 min-w-11">
            <img src={image} alt="" />
            <button
              onClick={handlePlaySong}
              className="invisible absolute top-0 flex size-full items-center justify-center bg-neutral-900/80 text-white group-hover/overlay:visible"
            >
              <FaPlay />
            </button>
          </div>
          <div
            className={`flex flex-col ${
              isCurrentSong ? "text-green-500" : "text-white"
            }`}
          >
            <a className="cursor-pointer hover:underline">{name}</a>
            <span className="text-neutral-300">{artist}</span>
          </div>
        </div>
      </td>
      <td className="hidden text-base text-neutral-400 lg:table-cell">
        {artist}
      </td>
      <td
        className={`w-12 text-center ${
          isLike ? "text-green-500" : "text-neutral-300"
        }`}
      >
        <button className="group/like p-1.5" onClick={onToggleLike}>
          <FaHeart className="size-5 transition-all group-hover/like:size-6" />
        </button>
      </td>
      <td className="w-12 text-center text-neutral-300">
        <ButtonMore track={{ id, name, image, artist, track }} />
      </td>
    </tr>
  );
}

export default TableRow;
