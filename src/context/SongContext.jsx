import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { shuffle } from "../helpers/helpers";

const SongContext = createContext();

function SongProvider({ children }) {
  const [playlist, setPlaylist] = useState(null);
  const [indexSong, setIndexSong] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  const shufflePlaylist = useMemo(
    function () {
      console.log("memo run");
      if (playlist != null) {
        console.log("there is playlist!");
        return shuffle([...playlist.tracks]);
      }
    },
    [playlist],
  );

  const currentSong = playlist?.tracks[indexSong];

  function handlePlaySong(playlistOnScreen, indexSong) {
    if (playlistOnScreen.id != playlist?.id) {
      setPlaylist(playlistOnScreen);
      setIndexSong(indexSong);
    } else {
      setIndexSong(indexSong);
    }
  }

  // false - true - false on ended
  function handleNext(hardNext, isRepeat, isShuffle) {
    if (
      !isShuffle &&
      !isRepeat &&
      indexSong === playlist.tracks.length - 1 &&
      !hardNext
    ) {
      const isLast = true;
      return isLast;
    } else if (
      !isShuffle &&
      (isRepeat || hardNext) &&
      indexSong >= playlist.tracks.length - 1
    ) {
      setIndexSong(0);
    } else if (!isShuffle) {
      setIndexSong((prev) => prev + 1);
    } else {
      return handleShuffleNext(isRepeat, hardNext);
    }
  }

  function handlePrevious(isShuffle = false) {
    if (!isShuffle && indexSong === 0) {
      const lastIndexSong = playlist.tracks.length - 1;
      setIndexSong(lastIndexSong);
    } else if (!isShuffle) {
      setIndexSong((prev) => prev - 1);
    } else {
      handleShufflePrev();
    }
  }

  function handleShuffleNext(isRepeat, hardNext) {
    const index = shufflePlaylist.findIndex(
      (track) => track.id === currentSong.id,
    );
    if (!isRepeat && !hardNext && index === playlist.tracks.length - 1) {
      const isLast = true;
      return isLast;
    } else if ((isRepeat || hardNext) && index >= playlist.tracks.length - 1) {
      const nextSong = shufflePlaylist[0];
      setIndexSong(
        playlist.tracks.findIndex((track) => track.id === nextSong.id),
      );
    } else {
      const nextSong = shufflePlaylist[index + 1];
      setIndexSong(
        playlist.tracks.findIndex((track) => track.id === nextSong.id),
      );
    }
  }

  function handleShufflePrev() {
    const index = shufflePlaylist.findIndex(
      (track) => track.id === currentSong.id,
    );
    if (index === 0) {
      const lastSong = shufflePlaylist[playlist.tracks.length - 1];
      setIndexSong(
        playlist.tracks.findIndex((track) => track.id === lastSong.id),
      );
    } else {
      const prevSong = shufflePlaylist[index - 1];
      setIndexSong(
        playlist.tracks.findIndex((track) => track.id === prevSong.id),
      );
    }
  }

  return (
    <SongContext.Provider
      value={{
        currentSong,
        setIndexSong,
        handlePlaySong,
        handleNext,
        handlePrevious,
        isPlay,
        setIsPlay,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

function useSong() {
  const context = useContext(SongContext);
  if (context === undefined)
    throw new Error("SongContext was used outside of SongProvider!");

  return context;
}

export { SongProvider, useSong };
