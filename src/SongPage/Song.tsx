/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { songList } from "../Data/songList";
import "./songs.css";
import { useParams, redirect } from "react-router-dom";

export const Song = () => {
  const { id } = useParams();

  if (!id || !songList[id]) {
    return redirect("/");
  }

  const song = songList[id];

  return (
    <div className="song-page">
      <img className="song-page-img" src={song.HDimgUrl} alt={song.name} />
      <h3 className="song-page-title">
        {song.name} · {song.year}
      </h3>
    </div>
  );
};
