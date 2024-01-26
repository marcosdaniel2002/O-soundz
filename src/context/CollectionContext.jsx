import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const CollectionContext = createContext();

function CollectionProvider({ children }) {
  const [likesSongs, setLikesSongs] = useLocalStorageState(
    { id: Date.now(), tracks: [] },
    "likes",
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

  return (
    <CollectionContext.Provider value={{ likesSongs, handleToggleLikeSong }}>
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
