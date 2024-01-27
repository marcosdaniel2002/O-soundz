import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import Discover from "./features/discover/Discover";
import Search from "./features/search/Search";
import ForYou from "./features/foryou/ForYou";
import Likes from "./features/likes/Likes";
import Playlist from "./features/playlist/Playlist";
import { SongProvider } from "./context/SongContext";
import { CollectionProvider } from "./context/CollectionContext";
import WatchPlaylist from "./features/playlist/WatchPlaylist";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Discover /> },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/for-you",
        element: <ForYou />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/playlist/:playlistId",
        element: <WatchPlaylist />,
      },
      {
        path: "/likes",
        element: <Likes />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SongProvider>
        <CollectionProvider>
          <RouterProvider router={router} />
        </CollectionProvider>
      </SongProvider>
    </QueryClientProvider>
  );
}

export default App;
