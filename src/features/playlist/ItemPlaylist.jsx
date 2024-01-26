import { FaMusic } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

import ButtonPlaySong from "../../ui/ButtonPlaySong";

function ItemPlaylist({ playlist, name }) {
  return (
    <li className="flex flex-col">
      <div className="group relative aspect-square max-w-xs overflow-hidden rounded-md border-2 border-neutral-700 border-opacity-70">
        {playlist.tracks === 0 ? (
          <div className="flex size-full items-center justify-center bg-neutral-900/30">
            <FaMusic className="size-10 text-neutral-500 lg:size-12" />
          </div>
        ) : (
          <img src={playlist.tracks[0].image} alt="" />
        )}
        <ButtonPlaySong />
        <button
          className="absolute bottom-2 right-2 flex size-10 items-center justify-center rounded-full
           bg-neutral-900/70 transition-opacity group-hover:visible group-hover:opacity-100
        lg:opacity-0 [&:hover>svg]:text-white"
        >
          <IoIosMore className="text-3xl text-gray-400" />
        </button>
      </div>
      <h2 className="p-2 text-white">{name}</h2>
    </li>
  );
}

export default ItemPlaylist;
