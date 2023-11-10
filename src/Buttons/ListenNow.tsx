import SpotifySvg from "./SpotifySvg";

interface Props {
  props: { url: string };
}

export const ListenNow = ({ props }: Props) => {
  return (
    <button
      className="listen-now"
      onClick={() => {
        window.open(props.url, "_blank");
      }}
    >
      Listen Now <SpotifySvg />
    </button>
  );
};
