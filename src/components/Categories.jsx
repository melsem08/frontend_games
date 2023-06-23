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
    <main>
      <h2>List of categories:</h2>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link to={`/${category.slug}/reviews`}>
                <h3>{category.slug}</h3>
              </Link>
              <p>{category.description}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
