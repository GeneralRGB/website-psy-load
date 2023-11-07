import logo from "../assets/logo.svg";
import "./preview.css";
import artist from "../assets/artist.jpg";
import SpotifySvg from "./SpotifySvg";
import InstagramSvg from "./InstagramSvg";
import YoutubeSvg from "./YoutubeSvg";
import FacebookSvg from "./FacebookSvg";
import TwitterSvg from "./TwitterSvg";
import AppleMusicSvg from "./AppleMusicSvg";
import SoundCloudSvg from "./SoundCloudSvg";
import YandexSvg from "./YandexSvg";

export default function Preview() {
  return (
    <div className="main">
      <img src={logo} alt="psy logo" className="logo" />
      <div className="preview-container"></div>
      <img src={artist} className="background"></img>
      <div className="main-btn">
        <button className="listen-now">
          Listen Now <SpotifySvg />
        </button>
      </div>
      <div className="other-btn">
        <div className="social-media">
          <div className="social-media-item">
            <InstagramSvg />
          </div>
          <div className="social-media-item">
            <YoutubeSvg />
          </div>
          <div className="social-media-item">
            <FacebookSvg />
          </div>
          <div className="social-media-item">
            <TwitterSvg />
          </div>
        </div>
        <div className="other-platforms">
          <h3>Other Platforms</h3>
          <div className="other-buttons">
            <button>
              <AppleMusicSvg />
              Apple
              <br />
              Music
            </button>
            <button>
              <SoundCloudSvg />
              Sound
              <br />
              Cloud
            </button>
            <button>
              <YandexSvg />
              Yandex
              <br />
              Music
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
