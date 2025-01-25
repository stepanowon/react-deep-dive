import { createBrowserRouter } from "react-router-dom";
import { membersLoader, playerLoader, songListLoader } from "../loaders";
import { addSongAction, updateSongAction } from "../actions";
import ErrorBoundary from "../components/ErrorBoundary";
import App from "../App";
import { lazy, Suspense } from "react";
import pMinDelay from "p-min-delay";
import { ReactCsspin } from "react-csspin";

// import Home from "../pages/Home";
// import About from "../pages/About";
// import { MembersSuspense } from "../pages/Members";
// import { SongListSuspense } from "../pages/SongList";
// import { PlayerSuspense } from "../components/Player";
// import AddSong from "../pages/AddSong";
// import { UpdateSongSuspense } from "../pages/UpdateSong";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => pMinDelay(import("../pages/About"), 2000));
const AddSong = lazy(() => import("../pages/AddSong"));
const MembersSuspense = lazy(() => import("../pages/Members").then((module) => ({ default: module.MembersSuspense })));
const SongListSuspense = lazy(() => import("../pages/SongList").then((module) => ({ default: module.SongListSuspense })));
const PlayerSuspense = lazy(() => import("../components/Player").then((module) => ({ default: module.PlayerSuspense })));
const UpdateSongSuspense = lazy(() => import("../pages/UpdateSong").then((module) => ({ default: module.UpdateSongSuspense })));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Suspense key="home" fallback={<ReactCsspin />}><Home /></Suspense> },
      { path: "about", element: <Suspense key="about" fallback={<ReactCsspin />}><About title={"여우와 늙다리들"} /></Suspense> },
      { path: "members", element: <Suspense key="members" fallback={<ReactCsspin />}><MembersSuspense /></Suspense>, loader: membersLoader },
      {
        path: "songs",
        element: <Suspense key="songs" fallback={<ReactCsspin />}><SongListSuspense /></Suspense>,
        loader: songListLoader,
        children: [{ path: ":id", element: <Suspense key="player" fallback={<ReactCsspin />}><PlayerSuspense /></Suspense>, loader: playerLoader }],
      },
      { path: "songs/new", element: <Suspense key="new" fallback={<ReactCsspin />}><AddSong /></Suspense>, action: addSongAction },
      { path: "songs/update/:id", element: <Suspense key="update" fallback={<ReactCsspin />}><UpdateSongSuspense /></Suspense>, action: updateSongAction, loader: playerLoader },
    ],
  },
]);

export default router;
