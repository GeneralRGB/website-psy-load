import AppleMusicSvg from "./AppleMusicSvg";

interface Props {
  props: {
    url: string;
  };
}

export const AppleMusic = ({ props }: Props) => {
  return (
    <button
      onClick={() => {
        window.open(props.url, "_blank");
      }}
    >
      <AppleMusicSvg />
      Apple
      <br />
      Music
    </button>
  );
};
