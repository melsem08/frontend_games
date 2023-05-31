import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <Link to="/">
        <button type="button">Reviews</button>
      </Link>
      <Link to="/categories">
        <button type="button">Categories</button>
      </Link>
      <Link to="/login">
        <button type="button">Login</button>
      </Link>
    </nav>
  );
}
