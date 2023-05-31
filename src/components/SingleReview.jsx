import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleReview } from "../../utils";
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
  });

  if (loading) {
    return <p>Page is loading...</p>;
  }

  return (
    <main>
      <img
        className="review_image"
        src={currentReview.review_img_url}
        alt={`Image of ${currentReview.title}`}
      />
      <h2>{currentReview.title}</h2>
      <div className="bodyWrapper">
        <b>
          <div className="top-left">
            Posted: {currentReview.created_at.slice(0, 10)}
          </div>
          <div className="top-right">
            Category:{" "}
            <Link to={`/${currentReview.category}/reviews`}>
              {currentReview.category}
            </Link>
          </div>
        </b>
      </div>
      <p>{currentReview.review_body}</p>
      <div className="bodyWrapper">
        <b>
          <div className="bottom-left">
            Designed by: {currentReview.designer}{" "}
          </div>
          <div className="bottom-right">Reviewer: {currentReview.owner}</div>
        </b>
      </div>
      <div className="bodyWrapper">
        <img
          className="thumb-down"
          src={thumb_down}
          alt="Image for thumb-down icon"
        />
        <h3>Votes: {currentReview.votes}</h3>
        <img
          className="thumb-up"
          src={thumb_up}
          alt="Image for thumb-up icon"
        />
      </div>
    </main>
  );
}
