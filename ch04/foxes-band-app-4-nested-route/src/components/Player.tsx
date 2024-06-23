import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Youtube from "react-youtube";
import BandContext from "../BandProvider";

type SongIdParam = { id: string };

const Player = () => {
  const navigate = useNavigate();
  const value = useContext(BandContext);
  const params = useParams<SongIdParam>();
  const id = params.id ? parseInt(params.id, 10) : 0;
  const song = value && value.songs.find((song) => song.id === id);
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

export default Player;
