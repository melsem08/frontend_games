import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

export function NavBar({ setUser }) {
  const user = useContext(UserContext);
  function checkSignIn() {
    if (user.username === undefined) {
      return (
        <Link to="/sign_in" className="SingleNavOption">
          Sign in
        </Link>
      );
    } else {
      return (
        <>
          <div className="SingleNavOption" onClick={handleClick}>
            {/* <div className="SignOut">
            <a onClick={handleClick}>Sign out</a>
          </div> */}
            Sign Out
          </div>
          <div className="Username">Hello, {user.username}</div>
        </>
      );
    }
    function handleClick() {
      setUser("");
      alert("You have been signed-out");
    }
  }
  return (
    <nav className="Nav">
      <Link to="/reviews" className="SingleNavOption">
        Reviews
      </Link>
      <Link to="/categories" className="SingleNavOption">
        Categories
      </Link>
      {checkSignIn()}
    </nav>
  );
}
