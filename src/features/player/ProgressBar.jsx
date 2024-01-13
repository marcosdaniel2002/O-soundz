import { useRef } from "react";
import { useEffect } from "react";
import { fancyDurationFormat } from "../../helpers/fancyDurationFormat";

function ProgressBar({ audioRef }) {
  const progressRef = useRef(null);
  const leftSpan = useRef(null);
  const rightSpan = useRef(null);

  console.log("render");

  useEffect(
    function () {
      audioRef.current.onloadedmetadata = function () {
        console.log("asdasd");
        progressRef.current.max = audioRef.current.duration;
        progressRef.current.value = audioRef.current.currentTime;
        rightSpan.current.textContent = fancyDurationFormat(
          Math.round(audioRef.current.duration),
        );
      };

      if (audioRef.current.play()) {
        setInterval(() => {
          progressRef.current.value = audioRef.current.currentTime;
          leftSpan.current.textContent = fancyDurationFormat(
            Math.round(audioRef.current.currentTime),
          );
        }, 500);
      }
    },
    [audioRef],
  );

  function refreshBar() {
    audioRef.current.currentTime = progressRef.current.value;
    audioRef.current.play();
  }

  return (
    <div className="flex w-full max-w-xl place-items-center gap-3 lg:max-w-lg">
      <span className="hidden text-sm text-neutral-200 md:block" ref={leftSpan}>
        0:00
      </span>
      <input
        ref={progressRef}
        type="range"
        onChange={refreshBar}
        className="progressBar w-full"
      />
      <span
        className="hidden text-sm text-neutral-200 md:block"
        ref={rightSpan}
      >
        0:00
      </span>
    </div>
  );
}
export default ProgressBar;
