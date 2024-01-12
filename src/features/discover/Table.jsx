import TableRow from "./TableRow";

import { useGetTopSongs } from "./useGetTopSongs";

function Table() {
  const { isLoading, data } = useGetTopSongs();
  console.log(isLoading);
  console.log(data);

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
        {Array.from({ length: 50 }, (_, i) => (
          <TableRow key={i} number={i} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
