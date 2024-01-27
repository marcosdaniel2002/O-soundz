import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ToolTip from "./ToolTip";

function ButtonMore({ track }) {
  const [isToolTip, setIsToolTip] = useState(false);

  return (
    <div className="relative">
      <button
        className="h-full rounded-full p-1.5 hover:bg-neutral-600"
        onClick={() => setIsToolTip((prev) => !prev)}
      >
        <BiDotsHorizontalRounded className="size-5" />
      </button>
      {isToolTip && (
        <ToolTip
          setIsToolTip={setIsToolTip}
          track={track}
          className={"right-12 top-0"}
        />
      )}
    </div>
  );
}

export default ButtonMore;
