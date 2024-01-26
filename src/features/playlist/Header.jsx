import { AiFillFolderAdd } from "react-icons/ai";
import ModalPlaylist from "./ModalPlaylist";
import { useState } from "react";

function Header({ handlePlaySong, playlist }) {
  const [modal, setModal] = useState(false);
  return (
    <header className="flex items-center justify-between gap-2 pb-4">
      <div className="flex flex-col">
        <h2 className="text-4xl font-medium text-neutral-100">Playlists</h2>
      </div>

      <button
        className="flex w-32 items-center justify-center gap-2 rounded-md bg-green-600 py-2 text-sm font-medium text-white"
        onClick={() => setModal((prev) => !prev)}
      >
        <AiFillFolderAdd />
        <span>New Playlist</span>
      </button>
      {modal && <ModalPlaylist setModal={setModal} />}
    </header>
  );
}

export default Header;
