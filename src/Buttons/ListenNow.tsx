import SpotifySvg from "./SpotifySvg";

interface Props {
  props: { url: string; language?: string };
}

export const ListenNow = ({ props }: Props) => {
  let listenText = "Listen now";
  switch (props.language) {
    case "en":
      listenText = "Listen now";
      break;
    case "ru":
      listenText = "Слушать";
      break;
    case "sp":
      listenText = "Escuchar ahora";
      break;
  }
  return (
    <button
      className="listen-now"
      onClick={() => {
        window.open(props.url, "_blank");
      }}
    >
      {listenText} <SpotifySvg />
    </button>
  );
};
