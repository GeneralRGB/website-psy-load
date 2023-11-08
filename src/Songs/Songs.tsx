import "./songs.css";
import SongCard from "./SongCard";
import { songList } from "../Data/songList";

export default function Songs() {
  return (
    <div className="songs-section" id="songs">
      <h3>Songs</h3>
      <div className="song-list">
        {songList.map((song, i) => {
          song.id = String(i);
          return <SongCard props={song} />;
        })}
      </div>
    </div>
  );
}
