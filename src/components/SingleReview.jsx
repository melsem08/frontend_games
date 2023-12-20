import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleReview, patchReview } from "../../utils";
import thumb_up from "../images/thumb-up.jpg";
import thumb_down from "../images/thumb-down.jpg";
import { Comments } from "./Comments";

export function SingleReview() {
  const [currentReview, setCurrentReview] = useState({});
  const [loading, setLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getSingleReview(review_id).then(({ review }) => {
      setCurrentReview(review[0]);
      setLoading(false);
    });
  }, [review_id]);

  function handleClick(review_id, value) {
    setCurrentReview((currentReview) => {
      if (value === "inc") {
        return { ...currentReview, votes: currentReview.votes + 1 };
      } else {
        return { ...currentReview, votes: currentReview.votes - 1 };
      }
    });
    alert("Thanks for voting!");
    patchReview(review_id, value);
  }

  if (loading) {
    return <p>Page is loading...</p>;
  }

  return (
    <main>
      <article className="review-container">
        <h2 className="review-title">{currentReview.title}</h2>
        <div>
          <b>Posted:</b> {currentReview.created_at.slice(0, 10)}
          <br />
          <b>Category:</b>{" "}
          <Link to={`/${currentReview.category}/reviews`}>
            {currentReview.category}
          </Link>
        </div>
        <img
          className="review-image"
          src={currentReview.review_img_url}
          alt={`Image of ${currentReview.title}`}
        />
        <p>{currentReview.review_body}</p>
        <b>Game designer: </b> {currentReview.designer} <br />
        <b>Reviewer: </b> {currentReview.owner}
        <div className="votes-wrapper">
          <img
            className="thumb-down"
            src={thumb_down}
            alt="Image for thumb-down icon"
            onClick={() => {
              handleClick(currentReview.review_id, "dec");
            }}
          />
          <h3>Votes: {currentReview.votes}</h3>
          <img
            className="thumb-up"
            src={thumb_up}
            alt="Image for thumb-up icon"
            onClick={() => {
              handleClick(currentReview.review_id, "inc");
            }}
          />
        </div>
      </article>
      <Comments />
    </main>
  );
}
