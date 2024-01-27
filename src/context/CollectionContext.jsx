import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const CollectionContext = createContext();

function CollectionProvider({ children }) {
  const [likesSongs, setLikesSongs] = useLocalStorageState(
    { id: Date.now(), tracks: [] },
    "likes",
  );
  const [selfPlaylists, setSelfPlaylists] = useLocalStorageState(
    [],
    "playlists",
  );

  function handleToggleLikeSong(songObj, isLike) {
    if (isLike) {
      handleAddToLikes(songObj);
    } else {
      handleRemoveToLikes(songObj.id);
    }
  }

  function handleAddToLikes(songObj) {
    setLikesSongs((likes) => {
      return { ...likes, id: Date.now(), tracks: [...likes.tracks, songObj] };
    });
  }

  function handleRemoveToLikes(id) {
    setLikesSongs((likes) => {
      return {
        ...likes,
        id: Date.now(),
        tracks: likes.tracks.filter((song) => song.id !== id),
      };
    });
  }

  function handleCreatePlaylist(name) {
    setSelfPlaylists((playlist) => [
      ...playlist,
      { id: Date.now(), name, tracks: [] },
    ]);
  }

  function handleAddToPlaylist(playlist, track) {
    if (!playlist.id) {
      console.log("asdasdda");
      setSelfPlaylists((prev) => [
        ...prev,
        { id: Date.now(), name: playlist.name, tracks: [track] },
      ]);
    } else {
      setSelfPlaylists((playlists) =>
        playlists.map((x) =>
          x.id === playlist.id ? { ...x, tracks: [...x.tracks, track] } : x,
        ),
      );
    }
  }

  function handleDeletePlaylist(id) {
    setSelfPlaylists((playlists) =>
      playlists.filter((playlist) => playlist.id !== id),
    );
  }

  return (
    <CollectionContext.Provider
      value={{
        likesSongs,
        handleToggleLikeSong,
        selfPlaylists,
        handleCreatePlaylist,
        handleAddToPlaylist,
        handleDeletePlaylist,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

function useCollection() {
  const context = useContext(CollectionContext);
  if (context === undefined)
    throw new Error(
      "CollectionContext was used outside of CollectionProvider!",
    );

  return context;
}

export { CollectionProvider, useCollection };
