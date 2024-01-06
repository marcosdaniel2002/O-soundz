import NavbarFooter from "../../ui/NavbarFooter";
import ControlsButtons from "./ControlsButtons";
import Playlist from "./Playlist";
import ProgressBar from "./ProgressBar";
import SongData from "./SongData";

function Player() {
  return (
    <div className="bg-neutral relative flex items-center justify-between bg-[#0f0f0f] lg:px-5">
      <SongData />
      <div className="z-50 flex w-full flex-col items-center gap-3 md:flex-col-reverse md:py-5 lg:z-0">
        <ProgressBar />
        <ControlsButtons />
        <NavbarFooter />
      </div>
      <Playlist />
    </div>
  );
}

export default Player;
