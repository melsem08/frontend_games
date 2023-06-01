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

export function getComments(review_id) {
  return fetch(
    `https://games-api-project.onrender.com/api/reviews/${review_id}/comments`
  ).then((res) => {
    return res.json();
  });
}

export function patchReview(review_id, value) {
  let bodyObj = {};
  if (value === "inc") {
    bodyObj.inc_votes = 1;
  } else {
    bodyObj.inc_votes = -1;
  }
  return fetch(
    `https://games-api-project.onrender.com/api/reviews/${review_id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(bodyObj),
    }
  ).then((res) => {
    return res.json();
  });
}
