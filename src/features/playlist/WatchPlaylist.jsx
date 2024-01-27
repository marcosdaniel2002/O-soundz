import { useNavigate, useParams } from "react-router-dom";
import { useSong } from "../../context/SongContext";
import { useCollection } from "../../context/CollectionContext";
import { FaPlay } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import Table from "./Table";

function WatchPlaylist() {
  const { playlistId } = useParams();
  const { handlePlaySong } = useSong();
  const { selfPlaylists } = useCollection();
  const navigate = useNavigate();

  const playlist = selfPlaylists.find(
    (playlist) => playlist.id === +playlistId,
  );

  return (
    <div className="pb-20 lg:pb-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 grid h-10 w-10 place-items-center rounded-full text-white"
      >
        <IoArrowBack className="text-2xl" />
      </button>
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-end">
        <div className="max-w-[350px] overflow-hidden rounded-xl">
          <img src={playlist.tracks[0].image} alt="" />
        </div>
        <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-5">
          <h1 className="text-lg font-semibold text-white sm:text-2xl">
            {playlist.name}
          </h1>
          <span className="text-lg text-neutral-300">
            {playlist.tracks.length} Songs
          </span>
          <button
            className="flex w-32 items-center justify-center gap-2 rounded-md bg-green-600 py-2 text-sm font-medium text-white"
            onClick={() => handlePlaySong(playlist, 0)}
          >
            <FaPlay />
            <span>Play</span>
          </button>
        </div>
      </div>

      <Table playlist={playlist} handlePlaySong={handlePlaySong} />
    </div>
  );
}

export default WatchPlaylist;
