import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

export function NavBar({ setUser }) {
  const user = useContext(UserContext);
  function checkSignIn() {
    if (user.username === undefined) {
      return (
        <Link to="/sign_in" className="single-nav-option">
          Sign in
        </Link>
      );
    } else {
      return (
        <>
          <div className="single-nav-option" onClick={handleClick}>
            {/* <div className="SignOut">
            <a onClick={handleClick}>Sign out</a>
          </div> */}
            Sign Out
          </div>
          <div className="username">Hello, {user.username}</div>
        </>
      );
    }
    function handleClick() {
      setUser("");
      alert("You have been signed-out");
    }
  }
  return (
    <nav className="nav">
      <Link to="/" className="single-nav-option">
        Home
      </Link>
      <Link to="/reviews" className="single-nav-option">
        Reviews
      </Link>
      <Link to="/categories" className="single-nav-option">
        Categories
      </Link>
      {checkSignIn()}
    </nav>
  );
}
