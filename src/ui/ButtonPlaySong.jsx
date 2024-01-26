import { FaPlay } from "react-icons/fa";

function ButtonPlaySong({ onClick }) {
  return (
    <button
      className="absolute bottom-2 left-2 rounded-full bg-green-500 p-3 shadow-xl transition-opacity group-hover:opacity-100 md:p-4 lg:opacity-0"
      onClick={onClick}
    >
      <FaPlay className="text-sm text-white lg:text-base" />
    </button>
  );
}

export default ButtonPlaySong;
