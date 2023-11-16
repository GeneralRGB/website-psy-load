import { Link } from "react-router-dom";
import "./songCard.css";

interface Props {
  props: {
    nameEng: string;
    nameRus: string;
    year: string;
    imgUrl: string;
    id: string;
  };
  language: string;
}

export default function SongCard({ props, language }: Props) {
  const song = { name: "" };
  switch (language) {
    case "en":
      song.name = props.nameEng;
      break;
    case "ru":
      song.name = props.nameRus;
      break;
    case "it":
      song.name = props.nameEng;
  }
  return (
    <div className="song-card">
      <Link to={"song/" + props.id} className="song-link">
        <img className="song-img" src={props.imgUrl} alt={song.name} />
        <span className="song-text">
          {song.name} · {props.year}
        </span>
      </Link>
    </div>
  );
}
