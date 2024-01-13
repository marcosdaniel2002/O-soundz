import { FaPlay } from "react-icons/fa";
import { TbSwitch2 } from "react-icons/tb";
import { FaBackwardStep } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaPause } from "react-icons/fa6";
import ButtonPlayer from "../../ui/ButtonPlayer";

function ControlsButtons({ audioRef }) {
  const [isPlay, setIsPlay] = useState(false);
  const [isAudio, setIsAudio] = useState(false);

  useEffect(
    function () {
      // const currentAudio = document.getElementById()
      if (audioRef.current != null) {
        setIsAudio(true);
      } else {
        setIsAudio(false);
      }
    },
    [audioRef],
  );

  function playPause() {
    if (isPlay) {
      audioRef.current.pause();
      setIsPlay(false);
    } else {
      audioRef.current.play();
      setIsPlay(true);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <ButtonPlayer>
        <TbSwitch2 />
      </ButtonPlayer>
      <ButtonPlayer>
        <FaBackwardStep />
      </ButtonPlayer>
      <ButtonPlayer main={true} onClick={playPause} disabled={!isAudio}>
        {isPlay ? <FaPause /> : <FaPlay />}
      </ButtonPlayer>
      <ButtonPlayer>
        <FaStepForward />
      </ButtonPlayer>
      <ButtonPlayer>
        <FaRepeat />
      </ButtonPlayer>
    </div>
  );
}

export default ControlsButtons;
