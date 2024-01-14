function DisplayTrack({
  audioRef,
  currentTrack,
  setDuration,
  progressBarRef,
  setIsPlay,
}) {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
    audioRef.current.play();
    setIsPlay(true);
  };

  return (
    <audio
      ref={audioRef}
      onLoadedMetadata={onLoadedMetadata}
      src={currentTrack}
    />
  );
}

export default DisplayTrack;
