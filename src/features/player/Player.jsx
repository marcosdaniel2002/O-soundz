import { useRef, useState } from "react";
import { useSong } from "../../context/SongContext";
import NavbarFooter from "../../ui/NavbarFooter";
import ControlsButtons from "./ControlsButtons";
import Playlist from "./Playlist";
import ProgressBar from "./ProgressBar";
import SongData from "./SongData";
import DisplayTrack from "./DisplayTrack";

function Player() {
  const { currentSong, handleNext, handlePrevious } = useSong();
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  const thereIsSong = currentSong != undefined;

  return (
    <>
      <div className="bg-neutral relative flex items-center justify-between bg-[#0f0f0f] lg:px-5">
        <SongData currentSong={currentSong} thereIsSong={thereIsSong} />
        <div className="z-50 flex w-full flex-col items-center gap-3 md:flex-col-reverse md:py-5 lg:z-0">
          <DisplayTrack
            audioRef={audioRef}
            currentTrack={currentSong?.track}
            setDuration={setDuration}
            progressBarRef={progressBarRef}
            setIsPlay={setIsPlay}
            thereIsSong={thereIsSong}
          />
          <ProgressBar
            audioRef={audioRef}
            progressBarRef={progressBarRef}
            timeProgress={timeProgress}
            duration={duration}
            setTimeProgress={setTimeProgress}
            thereIsSong={thereIsSong}
          />
          <ControlsButtons
            audioRef={audioRef}
            progressBarRef={progressBarRef}
            duration={duration}
            isPlay={isPlay}
            setIsPlay={setIsPlay}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            thereIsSong={thereIsSong}
          />
          <NavbarFooter />
        </div>
        <Playlist audioRef={audioRef} />
      </div>
    </>
  );
}

export default Player;
