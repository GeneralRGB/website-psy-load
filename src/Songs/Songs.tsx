import "./songs.css";
import SongCard from "./SongCard";

const songList = [
  {
    name: "Reset",
    year: "2022",
    imgUrl:
      "https://avatars.yandex.net/get-music-content/5502420/a61d858b.a.24499797-1/200x200",
  },
  {
    name: "Message",
    year: "2022",
    imgUrl:
      "https://avatars.yandex.net/get-music-content/6021799/a6382038.a.22177801-1/200x200",
  },
  {
    name: "Alone",
    year: "2022",
    imgUrl:
      "https://avatars.yandex.net/get-music-content/4384958/bb5c775f.a.16268592-1/200x200",
  },
  {
    name: "Letter",
    year: "2022",
    imgUrl:
      "https://avatars.yandex.net/get-music-content/6300975/a87e04f3.a.22195779-1/200x200",
  },
  {
    name: "Affection",
    year: "2022",
    imgUrl:
      "//avatars.yandex.net/get-music-content/5966316/23508d8f.a.21931276-1/200x200",
  },
  {
    name: "Task - The Peace",
    year: "2022",
    imgUrl:
      "https://avatars.yandex.net/get-music-content/5502420/a61d858b.a.24499797-1/200x200",
  },
  {
    name: "2030",
    year: "2022",
    imgUrl:
      "https://avatars.yandex.net/get-music-content/6201394/1c2e2647.a.22569243-1/200x200",
  },
  {
    name: "My Dreams",
    year: "2022",
    imgUrl:
      "https://avatars.yandex.net/get-music-content/5502420/67053f70.a.24242526-1/200x200",
  },
  {
    name: "Darkness In The Name Of Light",
    year: "2022",
    imgUrl:
      "https://avatars.yandex.net/get-music-content/4796762/b1beec13.a.16039221-1/200x200",
  },
];

export default function Songs() {
  return (
    <div className="songs-section" id="songs">
      <h3>Songs</h3>
      <div className="song-list">
        {songList.map((song) => (
          <SongCard props={song} />
        ))}
      </div>
    </div>
  );
}
