import { ListenNow } from "../Buttons/ListenNow";
import { songList } from "../Data/songList";
import { AppleMusic } from "../Buttons/AppleMusic";
import { SoundCloud } from "../Buttons/SoundCloud";
import { YandexMusic } from "../Buttons/YandexMusic";
import "./songs.css";
import { useParams, redirect } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  language: string;
}

export const Song = ({ language }: Props) => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const { id } = useParams();
  if (!id || !songList[Number(id)]) {
    return redirect("/");
  }

  const songElement = songList[Number(id)];
  const song = { name: "", year: "", lyrics: "", about: "", imgUrl: "" };
  switch (language) {
    case "en":
      song.name = songElement.nameEng;
      song.lyrics = songElement.textEng;
      song.about = songElement.aboutEng;
      break;
    case "ru":
      song.name = songElement.nameRus;
      song.lyrics = songElement.textRus;
      song.about = songElement.aboutRus;
      break;
    case "it":
      song.name = songElement.nameEng;
      song.lyrics = songElement.textEng;
      song.about = songElement.aboutEng;
      break;
  }
  song.year = songElement.year;
  song.imgUrl = songElement.HDimgUrl;
  return (
    <div className="song-page">
      <img className="song-page-img" src={song.imgUrl} alt={song.name} />
      <h3 className="song-page-title">
        {song.name} · {song.year}
      </h3>
      <ListenNow
        props={{
          url: "https://open.spotify.com/artist/5dIbY2QCBZfLFWFarAewhs",
          language,
        }}
      />
      <div className="other-buttons song-page__additional-buttons">
        <AppleMusic
          props={{
            url: "https://music.apple.com/us/artist/psy-load/1555843310",
          }}
        />
        <SoundCloud props={{ url: "https://soundcloud.com/psy-load" }} />
        <YandexMusic
          props={{ url: "https://music.yandex.ru/artist/12083962" }}
        />
      </div>
      <div className="song-page-lower">
        <div className="lyrics-section">
          <h4 className="song-page-second-title">Lyrics</h4>
          <div
            className="song-page-text"
            dangerouslySetInnerHTML={{ __html: song.lyrics }}
          ></div>
        </div>
        <div className="song-text-separator"></div>
        <div className="son-page-about-section">
          <h4 className="song-page-second-title">About</h4>
          <div
            className="song-page-about"
            dangerouslySetInnerHTML={{ __html: song.about }}
          ></div>
        </div>
      </div>
    </div>
  );
};
