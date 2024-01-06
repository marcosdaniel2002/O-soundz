import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Discover from "./features/discover/Discover";
import Search from "./features/search/Search";
import ForYou from "./features/foryou/ForYou";
import Likes from "./features/likes/Likes";
import Playlist from "./features/playlist/Playlist";

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
        path: "/likes",
        element: <Likes />,
      },
    ],
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
