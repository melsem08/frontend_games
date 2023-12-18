import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../utils";
import { UserContext } from "../App";

export function NewComment({ setComments }) {
  const [newComment, setNewComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { review_id } = useParams();
  const user = useContext(UserContext);

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!user.username) {
      return alert("You need to sign-in before posting");
    }
    if (newComment) {
      alert("Thank you for your comment!");
      postComment(user.username, newComment, review_id).then(({ comment }) => {
        setComments((currentComments) => {
          return [comment, ...currentComments];
        });
        setNewComment("");
        setErrorMessage("");
      });
    } else {
      setErrorMessage("Sorry, the comment can't be empty :(");
    }
  }

  return (
    <form className="CommentForm" onSubmit={handleSubmit}>
      <label htmlFor="newComment">
        <b>Share your thoughts:</b>
      </label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={handleChange}
        placeholder="Don't forget to sign-in to your account before posting!"
      ></textarea>
      <button type="submit">Add a comment</button>
      <p className="errorMessage">{errorMessage}</p>
    </form>
  );
}
