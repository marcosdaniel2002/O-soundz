import { IoSearchCircle } from "react-icons/io5";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { FaCompactDisc } from "react-icons/fa";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { IoHeartCircleSharp } from "react-icons/io5";
import ButtonFooter from "./ButtonFooter";

function NavbarFooter() {
  return (
    <nav className="m-2 flex w-11/12 items-center justify-around rounded-md bg-white/10 md:hidden">
      <ButtonFooter to="/search">
        <IoSearchCircle />
        <span>Search</span>
      </ButtonFooter>
      <ButtonFooter to="/">
        <RiCompassDiscoverFill />
        <span>Discover</span>
      </ButtonFooter>
      <ButtonFooter to="/for-you">
        <FaCompactDisc />
        <span>For you</span>
      </ButtonFooter>
      <ButtonFooter to="/playlist">
        <MdPlaylistAddCheckCircle />
        <span>Playlists</span>
      </ButtonFooter>
      <ButtonFooter to="/likes">
        <IoHeartCircleSharp />
        <span>Likes</span>
      </ButtonFooter>
    </nav>
  );
}

export default NavbarFooter;
