import { MdOutlinePlaylistPlay } from "react-icons/md";
import ButtonPlayer from "../../ui/ButtonPlayer";

function SongData() {
  return (
    <div
      className="absolute top-0 flex w-full -translate-y-full items-center justify-between bg-white bg-opacity-10 p-2 backdrop-blur-md 
    lg:top-auto lg:block lg:w-auto lg:translate-y-0 lg:bg-inherit lg:backdrop-blur-0"
    >
      <div className="flex items-center gap-5">
        <img
          className="size-12 rounded-md lg:size-16"
          src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/97/c7/f2/97c7f256-6db0-a45b-a786-f58dc928c970/196871404495.jpg/400x400cc.jpg"
          alt=""
        />
        <div>
          <h2 className="mb-1 text-xs font-semibold text-neutral-100 lg:text-sm">
            Agora hills
          </h2>
          <h3 className="text-xs text-neutral-400">Doja Cat</h3>
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
