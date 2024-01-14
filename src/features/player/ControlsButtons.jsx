import { FaPlay } from "react-icons/fa";
import { TbSwitch2 } from "react-icons/tb";
import { FaBackwardStep } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import ButtonPlayer from "../../ui/ButtonPlayer";
import { useEffect, useState } from "react";

function ControlsButtons({ audioRef }) {
  const [isPlay, setIsPlay] = useState(false);

  useEffect(
    function () {
      if (isPlay) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    },
    [audioRef, isPlay],
  );

  return (
    <div className="flex items-center gap-2">
      <ButtonPlayer>
        <TbSwitch2 />
      </ButtonPlayer>
      <ButtonPlayer>
        <FaBackwardStep />
      </ButtonPlayer>
      <ButtonPlayer main={true} onClick={() => setIsPlay((prev) => !prev)}>
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
