import ItemPlaylist from "./ItemPlaylist";

function ListPlaylist() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <ItemPlaylist />
      <ItemPlaylist />
      <ItemPlaylist />
      <ItemPlaylist />
      <ItemPlaylist />
    </ul>
  );
}

export default ListPlaylist;
