import { FaMusic } from "react-icons/fa";

function ItemPlaylist() {
  return (
    <li className="flex flex-col">
      {/* <div
        className="flex size-[150px] items-center justify-center overflow-hidden rounded-md border-2 border-neutral-700 border-opacity-70 
      sm:size-[180px] md:size-[200px] md:rounded-xl lg:size-[250px]"
      >
        <FaMusic className="size-10 text-neutral-500 lg:size-12" />
      </div> */}
      <div className="aspect-square max-w-xs overflow-hidden rounded-md border-2 border-neutral-700 border-opacity-70">
        {/* <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/97/c7/f2/97c7f256-6db0-a45b-a786-f58dc928c970/196871404495.jpg/400x400cc.jpg"
          alt=""
        /> */}
        <div className="flex size-full items-center justify-center bg-neutral-900/30">
          <FaMusic className="size-10 text-neutral-500 lg:size-12" />
        </div>
      </div>
      <h2 className="p-2 text-white">new playlist</h2>
    </li>
  );
}

export default ItemPlaylist;
