import TableRow from "./TableRow";
import Spinner from "../../ui/Spinner";
import { useGetTopSongs } from "./useGetTopSongs";
import { useSong } from "../../context/SongContext";

function Table() {
  const { isLoading, data: playlist } = useGetTopSongs();
  const { handlePlaySong } = useSong();

  if (isLoading)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner size={16} />
      </div>
    );

  return (
    <table className="w-full">
      <thead>
        <tr className="hidden text-left text-white lg:table-row [&>th]:py-5">
          <th className="text-center">#</th>
          <th className="px-2">Song</th>
          <th>Artist</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {playlist.tracks.map((track, i) => (
          <TableRow
            key={track.id}
            index={i}
            id={track.id}
            name={track.name}
            artist={track.artist}
            image={track.image}
            track={track.track}
            handlePlaySong={() => handlePlaySong(playlist, i)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
