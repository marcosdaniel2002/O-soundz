import { FaPlay } from "react-icons/fa";

function Header({ handlePlaySong, playlist }) {
  return (
    <header className="flex items-center justify-between gap-2 pb-4">
      <div className="flex flex-col">
        <h2 className="text-4xl font-medium text-neutral-100">Top Global</h2>
        <span className="text-base font-medium text-neutral-400">
          Songs #1-50
        </span>
      </div>

      <button
        className="flex w-32 items-center justify-center gap-2 rounded-md bg-green-600 py-2 text-sm font-medium text-white"
        onClick={() => handlePlaySong(playlist, 0)}
      >
        <FaPlay />
        <span>Play</span>
      </button>
    </header>
  );
}

export default Header;
