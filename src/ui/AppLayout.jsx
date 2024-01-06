import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "../features/player/Player";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[1fr_auto]">
      <main className="">
        <Outlet />
      </main>

      <Player />
      <Sidebar />
    </div>
  );
}

export default AppLayout;
