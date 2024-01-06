import { MdOutlinePlaylistPlay } from "react-icons/md";
import ButtonPlayer from "../../ui/ButtonPlayer";

function SongData() {
  return (
    <div className="absolute flex w-full -translate-y-full items-center justify-between bg-transparent p-2">
      <div className="absolute left-0 -z-20 size-full bg-white opacity-10 blur-[1px]"></div>
      <div className="flex gap-5">
        <img
          className="size-12 rounded-md"
          src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/97/c7/f2/97c7f256-6db0-a45b-a786-f58dc928c970/196871404495.jpg/400x400cc.jpg"
          alt=""
        />
        <div>
          <h2>Agora hills</h2>
          <h3>Doja Cat</h3>
        </div>
      </div>
      <div className="">
        <ButtonPlayer>
          <MdOutlinePlaylistPlay />
        </ButtonPlayer>
      </div>
    </div>
  );
}

export default SongData;
