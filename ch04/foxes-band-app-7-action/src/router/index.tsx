import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import { MembersSuspense } from "../pages/Members";
import { SongListSuspense } from "../pages/SongList";
import { PlayerSuspense } from "../components/Player";
import { membersLoader, playerLoader, songListLoader } from "../loaders";
//import Error404 from "../components/Error404";
import ErrorBoundary from "../components/ErrorBoundary";
import { addSongAction, updateSongAction } from "../actions";
import { UpdateSongSuspense } from "../pages/UpdateSong";
import AddSong from "../pages/AddSong";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About title={"여우와 늙다리들"} /> },
      { path: "members", element: <MembersSuspense />, loader: membersLoader },
      {
        path: "songs",
        element: <SongListSuspense />,
        loader: songListLoader,
        children: [{ path: ":id", element: <PlayerSuspense />, loader: playerLoader }],
      },
      { path: "songs/new", element: <AddSong />, action: addSongAction },
      { path: "songs/update/:id", element: <UpdateSongSuspense />, action: updateSongAction, loader: playerLoader },
    ],
  },
]);

export default router;
