import "./songs.css";
import SongCard from "./SongCard";
import { songList } from "../Data/songList";

export default function Songs() {
  return (
    <div className="songs-section" id="songs">
      <h3>Records</h3>
      <div className="song-list">
        {songList.map((song, i) => {
          song.id = String(i);
          return <SongCard key={song.id} props={song} />;
        })}
      </div>
    </div>
  );
}
