import { useState } from "react";

function ProgressBar() {
  const [value, setValue] = useState(2);

  return (
    <div className="flex w-full max-w-xl place-items-center gap-3">
      <span className="hidden text-xs text-neutral-200 md:block">0:00</span>
      <input
        name="progress"
        type="range"
        min="0"
        max="30"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="progressBar h-1 w-full appearance-none"
      />
      <span className="hidden text-xs text-neutral-200 md:block">0:30</span>
    </div>
  );
}

export default ProgressBar;
