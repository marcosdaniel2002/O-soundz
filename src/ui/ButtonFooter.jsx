import { NavLink } from "react-router-dom";

function ButtonFooter({ children, to }) {
  return (
    <NavLink
      to={to}
      className="flex items-center gap-2 px-3 py-2 text-sm text-white opacity-75 [&.active>span]:block [&.active]:text-green-400 [&>span]:hidden [&>svg]:text-3xl"
    >
      {children}
    </NavLink>
  );
}

export default ButtonFooter;
