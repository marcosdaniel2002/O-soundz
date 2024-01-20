import { useSong } from "../../context/SongContext";

function DisplayTrack({
  audioRef,
  currentTrack,
  setDuration,
  progressBarRef,
  thereIsSong,
  handleNext,
  isRepeat,
  isShuffle,
}) {
  const { setIsPlay } = useSong();
  const onLoadedMetadata = () => {
    if (!thereIsSong) return;
    const seconds = Math.round(audioRef.current.duration);
    setDuration(seconds);
    progressBarRef.current.max = seconds;
    audioRef.current.play();
    setIsPlay(true);
  };

  const onEnded = () => {
    const isLast = handleNext(false, isRepeat, isShuffle);
    if (isLast) {
      setIsPlay(false);
    }
  };

  return (
    <audio
      ref={audioRef}
      onLoadedMetadata={onLoadedMetadata}
      onEnded={onEnded}
      src={currentTrack}
    />
  );
}

export default DisplayTrack;
