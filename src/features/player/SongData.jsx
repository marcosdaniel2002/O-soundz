import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import ButtonPlayer from "../../ui/ButtonPlayer";

function SongData({ currentSong, thereIsSong }) {
  return (
    <div
      className="absolute top-0 flex w-full -translate-y-full items-center justify-between bg-white bg-opacity-10 p-2 backdrop-blur-md 
    lg:top-auto lg:block lg:w-auto lg:translate-y-0 lg:bg-inherit lg:backdrop-blur-0"
    >
      <div className="flex items-center gap-5">
        {!thereIsSong ? (
          <div className="flex size-12 items-center justify-center bg-neutral-800 lg:size-16">
            <FaMusic className="size-5 text-neutral-500 lg:size-8" />
          </div>
        ) : (
          <>
            <img
              className="size-12 rounded-md lg:size-16"
              src={currentSong.image}
              alt={currentSong.name}
            />
            <div>
              <h2 className="mb-1 text-xs font-semibold text-neutral-100 lg:text-sm">
                {currentSong.name}
              </h2>
              <h3 className="text-xs text-neutral-400">{currentSong.artist}</h3>
            </div>
          </>
        )}
      </div>
      <div className="lg:hidden">
        <ButtonPlayer>
          <MdOutlinePlaylistPlay />
        </ButtonPlayer>
      </div>
    </div>
  );
}

export default SongData;
