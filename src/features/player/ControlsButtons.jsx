import { FaPlay } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
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
  isShuffle,
  setIsShuffle,
  isRepeat,
  setIsRepeat,
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
      <ButtonPlayer
        onClick={() => setIsShuffle((prev) => !prev)}
        isActive={isShuffle}
      >
        <FaShuffle />
      </ButtonPlayer>
      <ButtonPlayer onClick={() => handlePrevious(isShuffle)}>
        <FaBackwardStep />
      </ButtonPlayer>
      <ButtonPlayer
        main={true}
        onClick={() => setIsPlay((prev) => !prev)}
        disabled={!thereIsSong}
      >
        {isPlay ? <FaPause /> : <FaPlay />}
      </ButtonPlayer>
      <ButtonPlayer onClick={() => handleNext(true, isRepeat, isShuffle)}>
        <FaStepForward />
      </ButtonPlayer>
      <ButtonPlayer
        onClick={() => setIsRepeat((prev) => !prev)}
        isActive={isRepeat}
      >
        <FaRepeat />
      </ButtonPlayer>
    </div>
  );
}

export default ControlsButtons;
