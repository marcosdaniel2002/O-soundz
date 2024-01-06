import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="hidden">
      <Link to="/search">Search</Link>
      <Link to="/">Discover</Link>
      <Link to="/">For you</Link>
      <Link to="/">Playlists</Link>
      <Link to="/">Likes</Link>
    </nav>
  );
}

export default Sidebar;
