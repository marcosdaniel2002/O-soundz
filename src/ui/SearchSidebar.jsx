import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function SearchSidebar({ to }) {
  return (
    <Link
      to={to}
      className="mx-2 flex items-center justify-between gap-4 rounded-xl bg-black/40 p-4 text-sm font-medium text-neutral-200 hover:bg-black/50"
    >
      <div className="flex items-center gap-4 [&>svg]:text-lg">
        <FaSearch />
        <span>Search</span>
      </div>
      <FaAngleRight />
    </Link>
  );
}

export default SearchSidebar;
