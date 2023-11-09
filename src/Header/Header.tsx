import { Link, useLocation } from "react-router-dom";
import "./header.css";
import { useEffect, useState } from "react";

export default function Header() {
  // const location = window.location.pathname;
  const location = useLocation();
  console.log(location);

  const [, setRouteChanged] = useState(false);

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
                  Main
                </a>
              </li>
              <li>
                <a href="#songs" className="header-link">
                  Songs
                </a>
              </li>
              <li>
                <a href="#about" className="header-link">
                  About
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/"}>Go Back</Link>
            </li>
          )}
        </ul>
        <ul className="header__language">
          <li style={{ color: "#ff5c52" }}>EN</li>
          <li className="dash">|</li>
          <li>RU</li>
          <li className="dash">|</li>
          <li>IT</li>
        </ul>
      </div>
    </header>
  );
}
