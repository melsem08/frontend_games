import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getComments } from "../../utils";
import arrow_up from "../images/arrow_up.png";
import arrow_down from "../images/arrow_down.png";
import { NewComment } from "./NewComment";

export function Comments() {
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments(review_id).then(({ comments }) => {
      setComments(comments);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) {
    return <h3>Comments are loading...</h3>;
  }
  return (
    <section className="comments-container">
      <h3>{comments.length} comments so far:</h3>
      <NewComment setComments={setComments} />
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id} className="single-comment">
            <div className="comment-date-and-author">
              Posted {comment.created_at.slice(0, 10)} at{" "}
              {comment.created_at.slice(11, 19)} by {comment.author}:
            </div>
            <p>
              <b>{comment.body}</b>
            </p>
            <div className="votes-wrapper">
              <img
                className="arrow-down"
                src={arrow_down}
                alt="Image for arrow-down icon"
              />
              <p className="votes">Karma: {comment.votes}</p>
              <img
                className="arrow-up"
                src={arrow_up}
                alt="Image for arrow-up icon"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
