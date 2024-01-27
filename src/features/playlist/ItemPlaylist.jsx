import { FaMusic } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import ButtonPlaySong from "../../ui/ButtonPlaySong";
import { useSong } from "../../context/SongContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCollection } from "../../context/CollectionContext";

function ItemPlaylist({ playlist, name }) {
  const { handlePlaySong } = useSong();
  const { handleDeletePlaylist } = useCollection();
  const [isToolTip, setIsToolTip] = useState(false);

  function handleDelete(e) {
    e.preventDefault();
    handleDeletePlaylist(playlist.id);
  }

  return (
    <li className="flex flex-col">
      <Link to={`/playlist/${playlist.id}`}>
        <div
          className="group relative aspect-square max-w-xs overflow-hidden rounded-md border-2 border-neutral-700 border-opacity-70"
          onMouseLeave={() => setIsToolTip(false)}
        >
          {playlist.tracks.length === 0 ? (
            <div className="flex size-full items-center justify-center bg-neutral-900/30">
              <FaMusic className="size-10 text-neutral-500 lg:size-12" />
            </div>
          ) : (
            <img src={playlist.tracks[0].image} alt="" />
          )}
          <ButtonPlaySong
            onClick={(e) => {
              e.preventDefault();
              handlePlaySong(playlist, 0);
            }}
          />
          <button
            className="absolute bottom-2 right-2 flex size-10 items-center justify-center rounded-full
           bg-neutral-900/70 transition-opacity group-hover:visible group-hover:opacity-100
        lg:opacity-0 [&:hover>svg]:text-white"
            onClick={(e) => {
              e.preventDefault();
              setIsToolTip((prev) => !prev);
            }}
          >
            {isToolTip && (
              <button
                className="absolute bottom-12 right-0 flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-3 text-xs text-white shadow-2xl transition-all hover:bg-red-600"
                onClick={handleDelete}
              >
                <span>Delete</span>
                <MdDelete className="text-base" />
              </button>
            )}
            <IoIosMore className="text-3xl text-gray-400" />
          </button>
        </div>
      </Link>
      <h2 className="p-2 text-white">{name}</h2>
    </li>
  );
}

export default ItemPlaylist;
