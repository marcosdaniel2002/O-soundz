import { createContext, useContext, useState } from "react";

const SongContext = createContext();

const initialSong = {
  name: "Agora Hills",
  image: "https://i.scdn.co/image/ab67616d00004851a840032f14ab22da396e43cb",
  track:
    "https://p.scdn.co/mp3-preview/28f256dad9add6e7f56ef0b6af5b0e9febdc62bb?cid=fce12d1069294c4880302946c939cb82",
  artist: "Doja Cat",
};

function SongProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(initialSong);

  return (
    <SongContext.Provider value={{ currentSong, setCurrentSong }}>
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
