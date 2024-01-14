function DisplayTrack({ audioRef, currentTrack, setDuration, progressBarRef }) {
  const onLoadedMetadata = () => {
    console.log("loaded");
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <audio ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
      <source src={currentTrack} />
    </audio>
  );
}

export default DisplayTrack;
