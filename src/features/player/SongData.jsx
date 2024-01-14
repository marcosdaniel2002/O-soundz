import { MdOutlinePlaylistPlay } from "react-icons/md";
import ButtonPlayer from "../../ui/ButtonPlayer";

function SongData({ currentSong }) {
  const { name, artist, image } = currentSong;
  return (
    <div
      className="absolute top-0 flex w-full -translate-y-full items-center justify-between bg-white bg-opacity-10 p-2 backdrop-blur-md 
    lg:top-auto lg:block lg:w-auto lg:translate-y-0 lg:bg-inherit lg:backdrop-blur-0"
    >
      <div className="flex items-center gap-5">
        <img className="size-12 rounded-md lg:size-16" src={image} alt={name} />
        <div>
          <h2 className="mb-1 text-xs font-semibold text-neutral-100 lg:text-sm">
            {name}
          </h2>
          <h3 className="text-xs text-neutral-400">{artist}</h3>
        </div>
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
