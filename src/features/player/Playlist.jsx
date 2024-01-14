import { MdOutlinePlaylistPlay } from "react-icons/md";
import { FaVolumeDown } from "react-icons/fa";
import ButtonPlayer from "../../ui/ButtonPlayer";
import { useEffect, useState } from "react";
import { HiVolumeOff } from "react-icons/hi";
import { FaVolumeHigh } from "react-icons/fa6";

function Playlist({ audioRef }) {
  const [volume, setVolume] = useState(30);
  const [muteVolume, setMuteVolume] = useState(false);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
    audioRef.current.muted = muteVolume;
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="absolute right-7 hidden items-center gap-[1px] lg:flex">
      <ButtonPlayer>
        <MdOutlinePlaylistPlay />
      </ButtonPlayer>
      <ButtonPlayer onClick={() => setMuteVolume((prev) => !prev)}>
        {muteVolume ? (
          <HiVolumeOff />
        ) : volume < 40 ? (
          <FaVolumeDown />
        ) : (
          <FaVolumeHigh />
        )}
      </ButtonPlayer>
      <input
        name="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        className="progressBar w-32"
      />
    </div>
  );
}

export default Playlist;
