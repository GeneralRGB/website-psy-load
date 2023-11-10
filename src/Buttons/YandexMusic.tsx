import YandexSvg from "./YandexSvg";

interface Props {
  props: {
    url: string;
  };
}

export const YandexMusic = ({ props }: Props) => {
  return (
    <button
      onClick={() => {
        window.open(props.url, "_blank");
      }}
    >
      <YandexSvg />
      Yandex
      <br />
      Music
    </button>
  );
};
