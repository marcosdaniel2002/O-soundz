import { useSong } from "../../context/SongContext";
import Spinner from "../../ui/Spinner";
import Table from "../discover/Table";
import Header from "./Header";
import { useGetTopSongsEc } from "./useGetTopSongsEc";

function ForYou() {
  const { isLoading, data: playlist } = useGetTopSongsEc();
  const { handlePlaySong } = useSong();

  if (isLoading)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner size={16} />
      </div>
    );

  return (
    <div className="pb-20 lg:pb-8">
      <Header handlePlaySong={handlePlaySong} playlist={playlist} />
      <Table handlePlaySong={handlePlaySong} playlist={playlist} />
    </div>
  );
}

export default ForYou;
