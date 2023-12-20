import header_logo from "../images/header.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Link to={`/`}>
      <div className="header">
        <header>
          <img
            src={header_logo}
            alt="Header Logo"
            className="header-image"
          ></img>
        </header>
      </div>
    </Link>
  );
}
