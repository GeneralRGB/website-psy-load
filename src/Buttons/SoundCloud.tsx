import SoundCloudSvg from "./SoundCloudSvg";

interface Props {
  props: {
    url: string;
  };
}

export const SoundCloud = ({ props }: Props) => {
  return (
    <button
      onClick={() => {
        window.open(props.url, "_blank");
      }}
    >
      <SoundCloudSvg />
      Sound
      <br />
      Cloud
    </button>
  );
};
