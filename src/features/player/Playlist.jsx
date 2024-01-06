import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaVolumeDown } from "react-icons/fa";
import ButtonPlayer from "../../ui/ButtonPlayer";
import { useState } from "react";

function Playlist() {
  const [value, setValue] = useState(30);
  return (
    <div className="absolute right-7 hidden items-center gap-[1px] lg:flex">
      <ButtonPlayer>
        <MdOutlinePlaylistPlay />
      </ButtonPlayer>
      <ButtonPlayer>
        <FaVolumeDown />
      </ButtonPlayer>
      <input
        name="volume"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="progressBar w-32"
      />
    </div>
  );
}

export default Playlist;
