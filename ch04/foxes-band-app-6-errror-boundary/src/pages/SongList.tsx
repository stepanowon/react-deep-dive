import React from "react";
import { Await, Link, Outlet, useAsyncValue, useLoaderData } from "react-router-dom";
import { SongType } from "../loaders";

import { ReactCsspin } from "react-csspin";
import 'react-csspin/dist/style.css';

const SongList = () => {
  const songs = useAsyncValue() as SongType[];

  const list = songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: "none" }}>
          {song.title} ( {song.musician} )
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h2 className="mt-4 mb-2">Song List</h2>
      <ul className="list-group">{list}</ul>
      <Outlet />
    </div>
  );
};

type DeferredSongsDataType = { songs: Promise<SongType[]> }

const SongListSuspense = ()=> {
  const data = useLoaderData() as DeferredSongsDataType;
  
  return (
    <React.Suspense fallback={<ReactCsspin />}>
      <Await resolve={data.songs}>
        <SongList />
      </Await>
    </React.Suspense>
  )
}
export { SongListSuspense };
export default SongList;
