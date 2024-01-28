import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Player from "../features/player/Player";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[1fr_auto] md:grid-cols-[auto_1fr]">
      <Sidebar />
      <main className="relative overflow-scroll px-4 pt-8 lg:px-8 lg:pt-12">
        <Outlet />
      </main>

      <Player />
    </div>
  );
}

export default AppLayout;
