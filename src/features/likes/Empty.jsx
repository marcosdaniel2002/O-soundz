import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";

function Empty() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10 lg:mt-36">
      <FaHeartbeat className="size-36 text-neutral-200" />
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-center text-2xl font-bold text-white lg:text-4xl">
          Songs that you like will appear here
        </h2>
        <p className="text-neutral-400">Save songs by tapping the heart</p>
        <Link
          to="/"
          className="rounded-full bg-white px-5 py-2.5 font-medium text-neutral-700"
        >
          Discover music
        </Link>
      </div>
    </div>
  );
}

export default Empty;
