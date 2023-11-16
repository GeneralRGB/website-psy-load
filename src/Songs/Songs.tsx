import "./songs.css";
import SongCard from "./SongCard";
import { songList } from "../Data/songList";

interface Props {
  language: string;
}

export default function Songs({ language }: Props) {
  let recordsText = "Records";
  switch (language) {
    case "en":
      recordsText = "Records";
      break;
    case "ru":
      recordsText = "Треки";
      break;
    case "it":
      recordsText = "Canzoni";
  }
  return (
    <div className="songs-section" id="songs">
      <h3>{recordsText}</h3>
      <div className="song-list">
        {songList.map((song, i) => {
          song.id = String(i);
          return <SongCard key={song.id} props={song} language={language} />;
        })}
      </div>
    </div>
  );
}
