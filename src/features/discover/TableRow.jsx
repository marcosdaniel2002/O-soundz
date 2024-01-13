import { FaHeart } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { useSong } from "../../context/SongContext";

function TableRow({ number, id, name, artist, image, track }) {
  const { setCurrentSong } = useSong();

  return (
    <tr className="group/overlay odd:bg-neutral-700/30 hover:bg-neutral-600/40">
      <td className="w-8 p-1.5 text-center text-xs text-white">{number + 1}</td>
      <td className="max-w-48 truncate p-1.5 text-xs text-white">
        <div className="flex items-center gap-4">
          <div className="relative size-11 min-w-11">
            <img src={image} alt="" />
            <button
              onClick={() =>
                setCurrentSong({
                  id,
                  name,
                  image,
                  track,
                  artist,
                })
              }
              className="invisible absolute top-0 flex size-full items-center justify-center bg-neutral-900/80 group-hover/overlay:visible"
            >
              <FaPlay />
            </button>
          </div>
          <div className="flex flex-col">
            <a className="hover:underline" href="">
              {name}
            </a>
            <span className="text-neutral-300">{artist}</span>
          </div>
        </div>
      </td>
      <td className="hidden text-base text-neutral-400 lg:table-cell">
        {artist}
      </td>
      <td className="w-12 text-center text-neutral-300">
        <button className="group/like p-1.5">
          <FaHeart className="size-5 transition-all group-hover/like:size-6" />
        </button>
      </td>
      <td className="w-12 text-center text-neutral-300">
        <button className="h-full rounded-full p-1.5 hover:bg-neutral-600">
          <BiDotsHorizontalRounded className="size-5" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
