import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategoryReviews } from "../../utils";

export function CategoryReviews() {
  const [categoryReviews, setCategoryReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category_name } = useParams();

  useEffect(() => {
    getCategoryReviews(category_name).then(({ reviews }) => {
      setCategoryReviews(reviews);
      setLoading(false);
    });
  }, [category_name]);

  if (loading) {
    return <p>Page is loading...</p>;
  }

  return (
    <main>
      <h2>{category_name} Reviews</h2>
      <ul>
        {categoryReviews.map((review) => {
          return (
            <li key={review.review_id} className="reviewList">
              <Link to={`/reviews/${review.review_id}`}>
                <h3>{review.title}</h3>
              </Link>
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
