import { useCollection } from "../../context/CollectionContext";
import ItemPlaylist from "./ItemPlaylist";

function ListPlaylist() {
  const { selfPlaylists } = useCollection();

  if (selfPlaylists.length === 0) return null;

  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {selfPlaylists.map((playlist) => (
        <ItemPlaylist
          name={playlist.name}
          playlist={playlist}
          key={playlist.id}
        />
      ))}
    </ul>
  );
}

export default ListPlaylist;
