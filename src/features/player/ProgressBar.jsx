import { useEffect } from "react";
import { fancyDurationFormat } from "../../helpers/fancyDurationFormat";

function ProgressBar({
  audioRef,
  progressBarRef,
  timeProgress,
  duration,
  setTimeProgress,
}) {
  function handleProgressChange() {
    audioRef.current.currentTime = progressBarRef.current.value;
  }

  useEffect(
    function () {
      if (audioRef.current.play()) {
        setInterval(function () {
          const currentTime = audioRef.current.currentTime;
          setTimeProgress(currentTime);
          progressBarRef.current.value = currentTime;
        }, 500);
      }
    },
    [audioRef, progressBarRef, setTimeProgress],
  );

  return (
    <div className="flex w-full max-w-xl place-items-center gap-3 lg:max-w-lg">
      <span className="hidden text-sm text-neutral-200 md:block">
        {fancyDurationFormat(Math.round(timeProgress))}
      </span>
      <input
        ref={progressBarRef}
        type="range"
        defaultValue={0}
        onChange={handleProgressChange}
        className="progressBar w-full"
      />
      <span className="hidden text-sm text-neutral-200 md:block">
        {fancyDurationFormat(Math.round(duration))}
      </span>
    </div>
  );
}

export default ProgressBar;
