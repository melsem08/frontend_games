export function getReviews() {
  return fetch(`https://games-api-project.onrender.com/api/reviews`).then(
    (res) => {
      return res.json();
    }
  );
}

export function getSingleReview(review_id) {
  return fetch(
    `https://games-api-project.onrender.com/api/reviews/${review_id}`
  ).then((res) => {
    return res.json();
  });
}
