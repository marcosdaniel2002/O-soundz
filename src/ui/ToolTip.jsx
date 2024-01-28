import { useEffect, useRef, useState } from "react";
import { useCollection } from "../context/CollectionContext";

function ToolTip({ setIsToolTip, track, className }) {
  const [optionsPlaylist, setOptionsPlaylist] = useState(false);
  const [value, setValue] = useState("");
  const { selfPlaylists, handleAddToPlaylist } = useCollection();

  const tooltip = useRef(null);

  useEffect(
    function () {
      function handleClickOutside(e) {
        if (
          tooltip.current &&
          !tooltip.current.contains(e.target) &&
          tooltip.current.previousElementSibling !== e.target.closest("button")
        ) {
          console.log("outside");
          setIsToolTip(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);

      return function cleanUp() {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [tooltip, setIsToolTip],
  );

  function onSubmit(e) {
    e.preventDefault();
    if (!value) return;
    handleAddToPlaylist({ name: value }, track);
    setIsToolTip(false);
  }

  return (
    <div
      className={
        "absolute z-50 w-32 rounded-md bg-neutral-900 p-1 text-xs text-white shadow-2xl " +
        className
      }
      ref={tooltip}
      onClick={(e) => e.stopPropagation()}
    >
      <ul className="[&>li]:cursor-pointer">
        <li
          className="relative p-1.5 transition-all hover:bg-neutral-700"
          onClick={() => setOptionsPlaylist((prev) => !prev)}
        >
          <span>Add to playlist</span>
          {optionsPlaylist && (
            <div
              className="absolute right-32 top-0 max-h-[7.5rem] w-32 overflow-x-hidden overflow-y-scroll rounded-md bg-neutral-900 p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <form action="" onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="add playlist..."
                  className="border-none bg-inherit p-1.5 outline-none"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </form>
              {selfPlaylists.length > 0 && (
                <ul className="border-t-1 text-left [&>li]:cursor-pointer">
                  {selfPlaylists.map((playlist) => (
                    <li
                      className="relative truncate p-1.5 transition-all hover:bg-neutral-700"
                      key={playlist.id}
                      onClick={() => {
                        handleAddToPlaylist(playlist, track);
                        setIsToolTip(false);
                      }}
                    >
                      {playlist.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ToolTip;
