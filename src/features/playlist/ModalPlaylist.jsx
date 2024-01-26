import { IoMdClose } from "react-icons/io";

function ModalPlaylist({ setModal }) {
  return (
    <div className="absolute top-0 flex size-full items-center justify-center bg-neutral-800 bg-opacity-70">
      <div className="w-[350px] rounded-xl border-2 border-neutral-500 border-opacity-40 bg-neutral-700 p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium text-neutral-200">
            New Playlist
          </h2>
          <button
            className="flex size-6 items-center justify-center rounded-full bg-gray-300 text-xl opacity-70 hover:opacity-100"
            onClick={() => setModal(false)}
          >
            <IoMdClose />
          </button>
        </div>
        <form className="mt-10 flex flex-col gap-5" action="">
          <div className="group relative flex flex-col">
            <label
              htmlFor=""
              className="pointer-events-none absolute text-gray-400 transition-all duration-500 group-focus-within:-translate-y-5 group-focus-within:text-xs group-focus-within:text-green-400"
            >
              Playlist name
            </label>
            <input
              type="text"
              className="border-none bg-inherit text-white outline-none"
            />
          </div>
          <button className="flex w-full items-center justify-center gap-2 rounded-md bg-green-600 py-2 text-sm font-medium text-white">
            create playlist
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalPlaylist;
