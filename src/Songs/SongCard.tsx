import { Link } from "react-router-dom";
import "./songCard.css";

interface Props {
  props: {
    name: string;
    year: string;
    imgUrl: string;
    id: string;
  };
}

export default function SongCard({ props }: Props) {
  return (
    <div className="song-card">
      <Link to={"song/" + props.id} className="song-link">
        <img className="song-img" src={props.imgUrl} alt={props.name} />
        <span className="song-text">
          {props.name} · {props.year}
        </span>
      </Link>
    </div>
  );
}
