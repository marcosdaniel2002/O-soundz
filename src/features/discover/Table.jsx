import TableRow from "./TableRow";

function Table() {
  return (
    <table className="w-full">
      <thead className="hidden">
        <tr>
          <th>#</th>
          <th>Song</th>
          <th></th>
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
