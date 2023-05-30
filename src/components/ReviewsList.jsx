import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../utils";

export function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <main>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/${review.review_id}`}>
                <h3>{review.title}</h3>
              </Link>
              <p>by {review.designer}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
