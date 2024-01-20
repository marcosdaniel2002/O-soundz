import { RiCompassDiscoverFill } from "react-icons/ri";
import { FaCompactDisc } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { FaHeart } from "react-icons/fa";

import SearchSidebar from "./SearchSidebar";
import NavLinkSidebar from "./NavLinkSidebar";

function Sidebar() {
  return (
    <nav className="before:shadow-before-nav hidden w-48 flex-col gap-6 bg-neutral-900/60 py-5 md:flex lg:w-56">
      <li>
        <img src="./o soundz.png" className="px-5" alt="" />
      </li>
      <li>
        <SearchSidebar to="/search" />
      </li>
      <li>
        <h2 className="ml-6 pb-2 text-sm text-neutral-400">Explore</h2>
        <NavLinkSidebar to="/">
          <RiCompassDiscoverFill />
          <span>Discover</span>
        </NavLinkSidebar>
        <NavLinkSidebar to="/for-you">
          <FaCompactDisc />
          <span>For you</span>
        </NavLinkSidebar>
      </li>
      <li>
        <h2 className="ml-6 pb-2 text-sm text-neutral-400">Your collection</h2>
        <NavLinkSidebar to="/playlist">
          <ImBooks />
          <span>Playlists</span>
        </NavLinkSidebar>
        <NavLinkSidebar to="/likes">
          <FaHeart />
          <span>Likes</span>
        </NavLinkSidebar>
      </li>
    </nav>
  );
}

export default Sidebar;
