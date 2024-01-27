import TableRow from "./TableRow";

function Table({ playlist, handlePlaySong }) {
  return (
    <table className="text-left">
      <thead>
        <tr className="text-white">
          <th className="w-full px-3 py-5 lg:w-auto">Song</th>
          <th className="hidden w-full py-5 lg:table-cell">Artist</th>
          <th className="w py-5"></th>
        </tr>
      </thead>
      <tbody>
        {playlist.tracks.map((track, i) => (
          <TableRow
            key={track.id}
            id={track.id}
            name={track.name}
            image={track.image}
            artist={track.artist}
            handlePlaySong={() => handlePlaySong(playlist, i)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
