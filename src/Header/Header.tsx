import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <ul className="header__nav">
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
        </ul>
        <ul className="header__language">
          <li>EN</li>
          <li className="dash">|</li>
          <li>RU</li>
          <li className="dash">|</li>
          <li>IT</li>
        </ul>
      </div>
    </header>
  );
}
