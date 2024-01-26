import Header from "./Header";
import ListPlaylist from "./ListPlaylist";

function Playlist() {
  return (
    <div className="relative h-full">
      <Header />
      <section className="pb-20 lg:pb-8">
        <ListPlaylist />
      </section>
    </div>
  );
}

export default Playlist;
