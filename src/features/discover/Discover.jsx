import { useSong } from "../../context/SongContext";
import Spinner from "../../ui/Spinner";
import Header from "./Header";
import Table from "./Table";
import { useGetTopSongs } from "./useGetTopSongs";

function Discover() {
  const { isLoading, data: playlist } = useGetTopSongs();
  const { handlePlaySong } = useSong();

  if (isLoading)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner size={16} />
      </div>
    );

  return (
    <div className="px-4 pb-20 pt-8 lg:pb-8">
      <Header handlePlaySong={handlePlaySong} playlist={playlist} />
      <Table handlePlaySong={handlePlaySong} playlist={playlist} />
    </div>
  );
}

export default Discover;
