import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "../features/player/Player";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[1fr_auto] md:grid-cols-[auto_1fr]">
      <Sidebar />
      <main className="overflow-scroll">
        <Outlet />
      </main>

      <Player />
    </div>
  );
}

export default AppLayout;
