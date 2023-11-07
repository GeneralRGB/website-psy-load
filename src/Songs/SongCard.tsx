import "./songCard.css";

interface Props {
  props: {
    name: string;
    year: string;
    imgUrl: string;
  };
}

export default function SongCard({ props }: Props) {
  console.log(props);
  return (
    <div className="song-card">
      <img className="song-img" src={props.imgUrl} alt={props.name} />
      <span className="song-text">
        {props.name} · {props.year}
      </span>
    </div>
  );
}
