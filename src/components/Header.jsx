import header_logo from "../images/header.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Link to={`/`}>
      <div className="Header">
        <header>
          {/* <h1 className="HeaderContent">NC Games Magazine</h1> */}
          <img src={header_logo} alt="Header Logo"></img>
        </header>
      </div>
    </Link>
  );
}
