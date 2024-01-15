import { FaPlay } from "react-icons/fa";
import { TbSwitch2 } from "react-icons/tb";
import { FaBackwardStep } from "react-icons/fa6";
import { FaStepForward } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import ButtonPlayer from "../../ui/ButtonPlayer";
import { useEffect } from "react";

function ControlsButtons({
  audioRef,
  isPlay,
  setIsPlay,
  thereIsSong,
  handleNext,
  handlePrevious,
}) {
  useEffect(
    function () {
      if (thereIsSong && isPlay) {
        audioRef.current.play();
      } else if (thereIsSong && !isPlay) {
        audioRef.current.pause();
      }
    },
    [audioRef, isPlay, thereIsSong],
  );

  return (
    <div className="flex items-center gap-2">
      <ButtonPlayer>
        <TbSwitch2 />
      </ButtonPlayer>
      <ButtonPlayer onClick={handlePrevious}>
        <FaBackwardStep />
      </ButtonPlayer>
      <ButtonPlayer
        main={true}
        onClick={() => setIsPlay((prev) => !prev)}
        disabled={!thereIsSong}
      >
        {isPlay ? <FaPause /> : <FaPlay />}
      </ButtonPlayer>
      <ButtonPlayer onClick={handleNext}>
        <FaStepForward />
      </ButtonPlayer>
      <ButtonPlayer>
        <FaRepeat />
      </ButtonPlayer>
    </div>
  );
}

export default ControlsButtons;
