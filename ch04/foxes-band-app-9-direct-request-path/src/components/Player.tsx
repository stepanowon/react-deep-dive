import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link, Await, useAsyncValue, useLoaderData } from "react-router-dom";
import Youtube from "react-youtube";
import { SongType } from "../loaders";

import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";

const Player = () => {
  const navigate = useNavigate();
  const song = useAsyncValue() as SongType;
  if (!song) navigate("/songs");

  const [title] = useState<string>(song?.title ? song.title : "");
  const [youtubeLink] = useState<string>(song?.youtube_link ? song.youtube_link : "");

  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link className="menu" to="/songs">
            <span className="float-start badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">&nbsp;&nbsp;&nbsp;{title}</span>
        </div>
        <div className="player">
          <div>
            <Youtube videoId={youtubeLink} opts={{ width: "320", height: "240", playerVars: { autoplay: 1 } }} />
          </div>
        </div>
      </div>
    </div>
  );
};

type DeferredOneSongDataType = { song: Promise<SongType> };

const PlayerSuspense = () => {
  const data = useLoaderData() as DeferredOneSongDataType;

  return (
    <React.Suspense fallback={<ReactCsspin />}>
      <Await resolve={data.song}>
        <Player />
      </Await>
    </React.Suspense>
  );
};

export { PlayerSuspense };

export default Player;
