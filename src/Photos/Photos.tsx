import "./photos.css";
import daniil from "./photo/Данила.jpg";
import sergio from "./photo/Сергей.jpg";
import { useState } from "react";

interface Props {
  language: string;
}

const photosList = [
  {
    nameEng: "Даня Хорикофф, Ритм гитара, сооснователь группы, поэт",
    nameRus: "Даня Хорикофф, Ритм гитара, сооснователь группы, поэт",
    nameSp: "Даня Хорикофф, Ритм гитара, сооснователь группы, поэт",
    year: "2023",
    link: daniil,
  },
  {
    nameEng: "Сергей Сенин",
    nameRus: "Сергей Сенин",
    nameSp: "Сергей Сенин",
    year: "2023",
    link: sergio,
  },
];

export const Photos = ({ language }: Props) => {
  const [selectedImage, setSelectedImage] = useState("");
  const openImage = (image: string) => {
    setSelectedImage(image);
  };
  let title = "";
  switch (language) {
    case "en":
      title = "Photos";
      break;
    case "ru":
      title = "Фото";
      break;
    case "sp":
      title = "Photo";
      break;
  }
  return (
    <div className="photos-section" id="photos">
      <h3>{title}</h3>

      <div className="photo-list">
        {photosList.map((photo) => (
          <div onClick={() => openImage(photo.link)}>
            <img src={photo.link} className="photos-photo" />
            <span className="photos-text">
              {language === "en" && photo.nameEng}
              {language === "ru" && photo.nameRus}
              {language === "sp" && photo.nameSp} · {photo.year}
            </span>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage("")}>
          <div className="modal">
            <img src={selectedImage} alt="Full Size" />
          </div>
        </div>
      )}
    </div>
  );
};
