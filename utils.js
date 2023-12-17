export function getReviews({ category, order, sort_by }) {
  if (category) {
    return fetch(
      `https://games-api-project.onrender.com/api/reviews?category=${category}&sort_by=${sort_by}&order=${order}`
    ).then((res) => {
      return res.json();
    });
  } else {
    return fetch(
      `https://games-api-project.onrender.com/api/reviews?sort_by=${sort_by}&order=${order}`
    ).then((res) => {
      return res.json();
    });
  }
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

export function getAllUsers() {
  return fetch(`https://games-api-project.onrender.com/api/users`).then(
    (res) => {
      return res.json();
    }
  );
}

export function postComment(username, body, review_id) {
  return fetch(
    `https://games-api-project.onrender.com/api/reviews/${review_id}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ username: username, body: body }),
    }
  ).then((res) => {
    return res.json();
  });
}

export function getCategoryReviews(category) {
  return fetch(
    `https://games-api-project.onrender.com/api/reviews?category=${category}`
  ).then((res) => {
    return res.json();
  });
}

export function getCategories() {
  return fetch(`https://games-api-project.onrender.com/api/categories`).then(
    (res) => {
      return res.json();
    }
  );
}
