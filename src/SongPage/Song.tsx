import { ListenNow } from "../Buttons/ListenNow";
import { songList } from "../Data/songList";
import { AppleMusic } from "../Buttons/AppleMusic";
import { SoundCloud } from "../Buttons/SoundCloud";
import { YandexMusic } from "../Buttons/YandexMusic";
import "./songs.css";
import { useParams, redirect } from "react-router-dom";
import { useEffect } from "react";

export const Song = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const { id } = useParams();
  if (!id || !songList[Number(id)]) {
    return redirect("/");
  }

  const song = songList[Number(id)];
  return (
    <div className="song-page">
      <img className="song-page-img" src={song.HDimgUrl} alt={song.name} />
      <h3 className="song-page-title">
        {song.name} · {song.year}
      </h3>
      <ListenNow />
      <div className="other-buttons song-page__additional-buttons">
        <AppleMusic />
        <SoundCloud />
        <YandexMusic />
      </div>
      <div className="song-page-lower">
        <div className="lyrics-section">
          <h4 className="song-page-second-title">Lyrics</h4>
          <div
            className="song-page-text"
            dangerouslySetInnerHTML={{ __html: song.textEng }}
          ></div>
        </div>
        <div className="song-text-separator"></div>
        <div className="son-page-about-section">
          <h4 className="song-page-second-title">About</h4>
          <div
            className="song-page-about"
            dangerouslySetInnerHTML={{ __html: song.aboutEng }}
          ></div>
        </div>
      </div>
    </div>
  );
};
