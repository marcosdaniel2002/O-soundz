import { FaHeart } from "react-icons/fa";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

function TableRow({ number }) {
  return (
    <tr className="group/overlay odd:bg-neutral-700/30 hover:bg-neutral-600/40">
      <td className="w-8 p-1.5 text-center text-xs text-white">{number + 1}</td>
      <td className="p-1.5 text-xs text-white">
        <div className="flex items-center gap-4">
          <div className="relative size-11">
            <img
              src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/97/c7/f2/97c7f256-6db0-a45b-a786-f58dc928c970/196871404495.jpg/400x400cc.jpg"
              alt=""
            />
            <button className="invisible absolute top-0 flex size-full items-center justify-center bg-neutral-900/80 group-hover/overlay:visible">
              <FaPlay />
            </button>
          </div>
          <div className="flex flex-col">
            <a className="hover:underline" href="">
              Agora Hills
            </a>
            <span className="text-neutral-300">Doja cat</span>
          </div>
        </div>
      </td>
      <td className="w-12 text-center text-neutral-300">
        <button className="group/like p-1.5">
          <FaHeart className="size-5 transition-all group-hover/like:size-6" />
        </button>
      </td>
      <td className="w-12 text-center text-neutral-300">
        <button className="h-full rounded-full p-1.5 hover:bg-neutral-600">
          <BiDotsHorizontalRounded className="size-5" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
