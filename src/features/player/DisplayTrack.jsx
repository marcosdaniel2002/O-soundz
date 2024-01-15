function DisplayTrack({
  audioRef,
  currentTrack,
  setDuration,
  progressBarRef,
  setIsPlay,
  thereIsSong,
}) {
  const onLoadedMetadata = () => {
    if (!thereIsSong) return;
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
