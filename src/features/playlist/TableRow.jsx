import { FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useSong } from "../../context/SongContext";

function TableRow({ id, name, image, artist, handlePlaySong }) {
  const { currentSong } = useSong();
  const isCurrentSong = currentSong?.id === id;

  return (
    <tr className="group odd:bg-neutral-700/30 hover:bg-neutral-600/40">
      <td className="w-7/12 p-1.5 text-xs md:p-2.5 lg:text-base">
        <div className="flex items-center gap-4">
          <div className="relative w-12 overflow-hidden rounded-md">
            <img src={image} alt={name} />
            <button
              className="invisible absolute top-0 grid size-full place-items-center bg-green-600 bg-neutral-900/80 text-white group-hover:visible"
              onClick={handlePlaySong}
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
            <span className="text-neutral-300 lg:hidden">{artist}</span>
          </div>
        </div>
      </td>
      <td className="hidden p-1.5 text-xs text-neutral-400 md:p-2.5 md:py-2 md:pl-0 lg:table-cell lg:text-base">
        {artist}
      </td>
      <td className="pr-2">
        <button
          className="grid size-8 cursor-not-allowed place-items-center rounded-full"
          disabled
        >
          <BsThreeDots className="text-xl text-neutral-400" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
