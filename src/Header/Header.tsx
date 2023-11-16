import { Link, useLocation } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

interface Props {
  language: string;
  setLanguage(language: string): void;
}

export default function Header({ language, setLanguage }: Props) {
  const location = useLocation();
  const [, setRouteChanged] = useState(false);

  let headerLinks = ["Main", "Songs", "About", "Go Back"];
  switch (language) {
    case "en":
      headerLinks = ["Main", "Songs", "About", "Go Back"];
      break;
    case "ru":
      headerLinks = ["Главная", "Песни", "О группе", "Назад"];
      break;
    case "it":
      headerLinks = ["Main", "Songs", "About", "Go Back"];
      break;
  }

  useEffect(() => {
    // Listen for changes in location.pathname and trigger a re-render
    setRouteChanged(true);
  }, [location.pathname]);
  return (
    <header>
      <div className="header-container">
        <ul className="header__nav">
          {location.pathname == "/" ||
          location.pathname == "/website-psy-load/" ? (
            <>
              <li>
                <a href="#main" className="header-link">
                  {headerLinks[0]}
                </a>
              </li>
              <li>
                <a href="#songs" className="header-link">
                  {headerLinks[1]}
                </a>
              </li>
              <li>
                <a href="#about" className="header-link">
                  {headerLinks[2]}
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/"}>{headerLinks[3]}</Link>
            </li>
          )}
        </ul>
        <ul className="header__language">
          <li
            className="language"
            style={language == "en" ? { color: "#ff5c52" } : {}}
            onClick={() => setLanguage("en")}
          >
            EN
          </li>
          <li className="dash">|</li>
          <li
            className="language"
            style={language == "ru" ? { color: "#ff5c52" } : {}}
            onClick={() => setLanguage("ru")}
          >
            RU
          </li>
          <li className="dash">|</li>
          <li
            className="language"
            style={language == "it" ? { color: "#ff5c52" } : {}}
            onClick={() => setLanguage("it")}
          >
            IT
          </li>
        </ul>
      </div>
    </header>
  );
}
