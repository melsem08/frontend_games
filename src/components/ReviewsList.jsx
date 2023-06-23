import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../../utils";

export function ReviewsList() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Page is loading...</p>;
  }

  return (
    <main id="main">
      <h2>Reviews</h2>
      <ul className="flex-container">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="flex-item">
              {/* <Link to={`/reviews/${review.review_id}`}> */}
              <div className="overlay">
                <span>{review.title}</span>
              </div>
              {/* </Link> */}
              <img
                className="reviewImage"
                src={review.review_img_url}
                alt={`Image for ${review.title}`}
              />
              <p>by {review.designer}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
