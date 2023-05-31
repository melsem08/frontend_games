export function getReviews() {
  return fetch(`https://games-api-project.onrender.com/api/reviews`).then(
    (res) => {
      return res.json();
    }
  );
}
