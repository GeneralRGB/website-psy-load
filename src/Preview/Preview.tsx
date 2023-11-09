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

export default function Preview() {
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
        <ListenNow />
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
            <AppleMusic />
            <SoundCloud />
            <YandexMusic />
          </div>
        </div>
      </div>
    </div>
  );
}
