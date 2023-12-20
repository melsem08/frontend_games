import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../utils";

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Page is loading...</p>;
  }

  return (
    <main className="categories">
      <h2 className="categories-header">Board Game Reviews Categories</h2>
      <p>
        If you want to browse some specific categories we’ve curated it just for
        you. Here you will find reviews of strategy games, dexterity games,
        deck-building games plus anything else we can think of to share with
        you. Select one of the options below to explore all reviews in chosen
        category.
      </p>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <p>
                <span className="category-name">{category.slug}</span>{" "}
                {category.description}
              </p>
              <Link
                to={`/reviews?category=${category.slug}`}
                className="category-link"
              >
                Click here to choose {category.slug} category
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
