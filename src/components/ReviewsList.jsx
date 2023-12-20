import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { getReviews } from "../../utils";

export function ReviewsList() {
  const [searchParams] = useSearchParams();
  const chosenReviewCategory = searchParams.get("category");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState({
    category: chosenReviewCategory,
    order: "desc",
    sort_by: "created_at",
  });
  let { state } = useLocation();

  useEffect(() => {
    setSearchQuery((currQuery) => {
      return {
        ...currQuery,
        category: chosenReviewCategory,
        order: "desc",
        sort_by: "created_at",
      };
    });
  }, [chosenReviewCategory]);

  useEffect(() => {
    getReviews(searchQuery).then(({ reviews }) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, [searchQuery, state]);

  function changeOrder(value) {
    setSearchQuery((currQuery) => {
      return { ...currQuery, order: value };
    });
  }

  function changeSortBy(value) {
    setSearchQuery((currQuery) => {
      return { ...currQuery, sort_by: value };
    });
  }

  if (loading) {
    return <p>Page is loading...</p>;
  }

  return (
    <main id="main">
      {chosenReviewCategory ? (
        <h2>Board Game Reviews ({chosenReviewCategory} category)</h2>
      ) : (
        <h2>Board Game Reviews</h2>
      )}
      <div className="sorting-options">
        <label htmlFor="sorting-options">Sort By: </label>
        <select
          name="sorting-options"
          onChange={(event) => changeSortBy(event.target.value)}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <button onClick={() => changeOrder("asc")}>Ascending</button>
        <button onClick={() => changeOrder("desc")}>Descending</button>
      </div>
      <ul className="flex-container">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="flex-item">
              {
                <Link to={`/reviews/${review.review_id}`}>
                  <div className="overlay">
                    <span>
                      {review.title} <br /> <br /> Game by: {review.designer}
                    </span>
                  </div>
                </Link>
              }
              <img
                src={review.review_img_url}
                alt={`Image for ${review.title}`}
              />
              <div className="review-info">
                <a className="user-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    className="svg"
                  >
                    <path
                      fill="currentColor"
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                    ></path>
                  </svg>
                  {review.owner}
                </a>
                <span className="user-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="svg"
                  >
                    <path
                      fill="currentColor"
                      d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
                    ></path>
                  </svg>
                  {review.created_at.slice(0, 10)}
                </span>
                <span className="user-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="svg"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.667a1 1 0 0 0-.6.2L3.6 21.8A1 1 0 0 1 2 21V6zm5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {review.comment_count}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="svg"
                >
                  <path
                    fill="currentColor"
                    d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047z"
                  />
                </svg>
                {review.votes}
              </div>
              <Link to={`/reviews/${review.review_id}`}>
                <h3 className="review-title">{review.title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
