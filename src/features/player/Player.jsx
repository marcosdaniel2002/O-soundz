import NavbarFooter from "../../ui/NavbarFooter";
import ControlsButtons from "./ControlsButtons";
import Playlist from "./Playlist";
import ProgressBar from "./ProgressBar";
import SongData from "./SongData";

function Player() {
  return (
    <div className="bg-neutral relative flex justify-center bg-neutral-950">
      <SongData />
      <div className="z-50 flex w-full flex-col items-center gap-3 md:flex-col-reverse md:py-5">
        <ProgressBar />
        <ControlsButtons />
        <NavbarFooter />
      </div>
      <Playlist />
    </div>
  );
}

export default Player;
