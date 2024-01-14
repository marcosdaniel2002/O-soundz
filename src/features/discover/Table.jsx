import TableRow from "./TableRow";
import Spinner from "../../ui/Spinner";
import { useGetTopSongs } from "./useGetTopSongs";

function Table() {
  const { isLoading, data } = useGetTopSongs();

  if (isLoading)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner size={16} />
      </div>
    );

  const tracks = data.tracks.items;
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
        {tracks.map((track, i) => (
          <TableRow
            key={track.track.id}
            id={track.track.id}
            number={i}
            name={track.track.name}
            artist={track.track.artists.at(0).name}
            image={track.track.album.images.at(2).url}
            track={track.track.preview_url}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
