import { MdOutlinePlaylistPlay } from "react-icons/md";
import ButtonPlayer from "../../ui/ButtonPlayer";

function Playlist() {
  return (
    <div className="hidden">
      <ButtonPlayer>
        <MdOutlinePlaylistPlay />
      </ButtonPlayer>
    </div>
  );
}

export default Playlist;
