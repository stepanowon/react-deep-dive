import { useContext } from "react";
import { Link } from "react-router-dom";
import BandContext from "../BandProvider";

const SongList = () => {
  const value = useContext(BandContext);

  const list = value && value.songs.map((song) => {
    return (
      <li className="list-group-item" key={song.id}>
        <Link to={`/songs/${song.id}`} style={{ textDecoration: "none" }}>
          {song.title} ( {song.musician} )
        </Link>
      </li>
    );
  });
  return (
    <div>
      <h2 className="mt-4 mb-2">Song List</h2>
      <ul className="list-group">{list}</ul>
    </div>
  );
};

export default SongList;
