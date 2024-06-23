import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { membersLoader, playerLoader, songListLoader } from "../loaders";
import ErrorBoundary from "../components/ErrorBoundary";
import { addSongAction, updateSongAction } from "../actions";
import pMinDelay from "p-min-delay";

//import Home from "../pages/Home";
//import About from "../pages/About";
//import { MembersSuspense } from "../pages/Members";
//import { SongListSuspense } from "../pages/SongList";
//import { PlayerSuspense } from "../components/Player";
//import { UpdateSongSuspense } from "../pages/UpdateSong";
//import AddSong from "../pages/AddSong";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => pMinDelay(import("../pages/About"), 2000));
const AddSong = React.lazy(() => import("../pages/AddSong"));
const MembersSuspense = React.lazy(() => import("../pages/Members").then((module) => ({ default: module.MembersSuspense })));
const SongListSuspense = React.lazy(() => import("../pages/SongList").then((module) => ({ default: module.SongListSuspense })));
const PlayerSuspense = React.lazy(() => import("../components/Player").then((module) => ({ default: module.PlayerSuspense })));
const UpdateSongSuspense = React.lazy(() => import("../pages/UpdateSong").then((module) => ({ default: module.UpdateSongSuspense })));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About title={"여우와 늙다리들"} />,
      },
      {
        path: "members",
        element: <MembersSuspense />,
        loader: membersLoader,
      },
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
