import React from "react";
import { Await, Link, Outlet, useAsyncValue, useLoaderData } from "react-router-dom";
import { SongType } from "../loaders";

import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";

const SongList = () => {
  const songs = useAsyncValue() as SongType[];

  const list = songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        {song.title} ( {song.musician} )
        <Link to={`/songs/update/${song.id}`} style={{ textDecoration: "none" }}>
          <span className="float-end badge bg-secondary ms-2">수정</span>
        </Link>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: "none" }}>
          <span className="float-end badge bg-secondary ms-2 me-2">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4 mb-2">Song List</h2>
      </div>
      <div className="row justify-content-end">
        <div className="col-12">
          <Link className="btn btn-primary float-end" to={"/songs/new"}>
            새로운 곡 추가
          </Link>
        </div>
      </div>
      <br />
      <div className="row">
        <ul className="list-group">{list}</ul>
      </div>
      <Outlet />
    </div>
  );
};

type DeferredSongsDataType = { songs: Promise<SongType[]> };

const SongListSuspense = () => {
  const data = useLoaderData() as DeferredSongsDataType;

  return (
    <React.Suspense fallback={<ReactCsspin />}>
      <Await resolve={data.songs}>
        <SongList />
      </Await>
    </React.Suspense>
  );
};
export { SongListSuspense };
export default SongList;
