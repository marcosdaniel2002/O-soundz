import TableRow from "./TableRow";

function Table({ handlePlaySong, playlist }) {
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
