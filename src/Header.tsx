import "./header.css";

export default function Header() {
  return (
    <header>
      <ul className="header__nav">
        <li>Main</li>
        <li>Songs</li>
        <li>About</li>
      </ul>
      <ul className="header__language">
        <li>EN</li>
        <li className="dash">|</li>
        <li>RU</li>
        <li className="dash">|</li>
        <li>IT</li>
      </ul>
    </header>
  );
}
