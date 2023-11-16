import logo from "../assets/logo.svg";
import "./preview.css";
import artist from "../assets/artist.jpg";
import InstagramSvg from "./InstagramSvg";
import YoutubeSvg from "./YoutubeSvg";
import FacebookSvg from "./FacebookSvg";
import TwitterSvg from "./TwitterSvg";
import { ListenNow } from "../Buttons/ListenNow";
import { AppleMusic } from "../Buttons/AppleMusic";
import { SoundCloud } from "../Buttons/SoundCloud";
import { YandexMusic } from "../Buttons/YandexMusic";
import { useEffect } from "react";

interface Props {
  language: string;
}

export default function Preview({ language }: Props) {
  let otherPlatformText = "Other Platforms";
  switch (language) {
    case "en":
      otherPlatformText = "Other Platforms";
      break;
    case "ru":
      otherPlatformText = "Другие Платформы";
      break;
    case "it":
      otherPlatformText = "Altre piattaforme";
      break;
  }

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <div className="main" id="main">
      <img src={logo} alt="psy logo" className="logo" />
      <div className="preview-container"></div>
      <img src={artist} className="background"></img>
      <div className="main-btn">
        <ListenNow
          props={{
            url: "https://open.spotify.com/artist/5dIbY2QCBZfLFWFarAewhs",
            language: language,
          }}
        />
      </div>
      <div className="other-btn">
        <div className="social-media">
          <div
            className="social-media-item"
            onClick={() =>
              window.open("https://www.instagram.com/psy.load/", "_blank")
            }
          >
            <InstagramSvg />
          </div>
          <div
            className="social-media-item"
            onClick={() =>
              window.open("https://www.youtube.com/@psyload2539", "_blank")
            }
          >
            <YoutubeSvg />
          </div>
          <div
            className="social-media-item"
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          >
            <FacebookSvg />
          </div>
          <div
            className="social-media-item"
            onClick={() =>
              window.open("https://twitter.com/LoadPsy89298", "_blank")
            }
          >
            <TwitterSvg />
          </div>
        </div>
        <div className="other-platforms">
          <h3>{otherPlatformText}</h3>
          <div className="other-buttons">
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
        </div>
      </div>
    </div>
  );
}
