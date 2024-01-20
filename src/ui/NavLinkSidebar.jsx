import { NavLink } from "react-router-dom";

function NavLinkSidebar({ children, to }) {
  return (
    <NavLink
      to={to}
      className="relative flex items-center gap-4 py-4 pl-6 text-sm font-medium text-neutral-200 hover:bg-neutral-600/20 [&.active>span]:block [&>svg]:text-xl"
    >
      {children}
      <span className="absolute right-0 top-1/2 hidden h-6 w-1 -translate-y-1/2 rounded-l-lg bg-green-500"></span>
    </NavLink>
  );
}

export default NavLinkSidebar;
