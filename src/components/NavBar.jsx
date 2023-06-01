import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

export function NavBar({ setUser }) {
  const user = useContext(UserContext);
  function checkSignIn() {
    if (user.username === undefined) {
      return (
        <Link to="/sign_in">
          <button type="button">Sign in</button>
        </Link>
      );
    } else {
      return (
        <>
          <button type="button" onClick={handleClick}>
            Sign out
          </button>
          <h3 className="NavName">Hello, {user.username}</h3>
        </>
      );
    }
    function handleClick() {
      setUser("");
      alert("You have been signed-out");
    }
  }
  return (
    <nav>
      <Link to="/">
        <button type="button">Reviews</button>
      </Link>
      <Link to="/categories">
        <button type="button">Categories</button>
      </Link>
      {checkSignIn()}
    </nav>
  );
}
