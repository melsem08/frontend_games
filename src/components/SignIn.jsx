import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../utils";

export function SignIn({ setUser }) {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers().then(({ users }) => {
      setAllUsers(users);
      setLoading(false);
    });
  }, []);

  function handleClick(user) {
    setUser(user);
    alert(`You have signed-in as ${user.username}`);
    navigate(-1);
  }

  if (loading) {
    return <h3>Users are loading...</h3>;
  }

  return (
    <main className="sign-in">
      <h2>Hello! Please, choose your user to sign-in:</h2>
      <ul>
        {allUsers.map((user) => {
          return (
            <li key={user.username} className="userList">
              <h3>{user.username}</h3>
              <p>{user.name}</p>
              <img
                className="userImage"
                src={user.avatar_url}
                alt={`${user.username}'s avatar image`}
              ></img>
              <br />
              <button
                type="button"
                onClick={() => {
                  handleClick(user);
                }}
              >
                Choose ME!
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
