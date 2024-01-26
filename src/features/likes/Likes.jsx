import { useRef } from "react";
import { useCollection } from "../../context/CollectionContext";
import { useSong } from "../../context/SongContext";
import SongCard from "../../ui/SongCard";
import Empty from "./Empty";
import Header from "./Header";

function Likes() {
  const { likesSongs: playlist } = useCollection();
  const { handlePlaySong } = useSong();

  const copyPlaylist = useRef({ ...playlist });

  return (
    <div className="pb-20 lg:pb-8">
      <Header />
      {copyPlaylist.current.tracks.length === 0 ? (
        <Empty />
      ) : (
        <div className="mt-5 flex items-center">
          <section className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {copyPlaylist.current.tracks.map((track, i) => (
              <SongCard
                key={track.id}
                id={track.id}
                name={track.name}
                image={track.image}
                artist={track.artist}
                track={track.track}
                handlePlaySong={() => handlePlaySong(copyPlaylist.current, i)}
              />
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default Likes;
