import React, { useState, useEffect } from "react";
import { /* useNavigate */ Link } from "react-router-dom";

const { VITE_BACKEND_URL } = import.meta.env;

export default function Home() {
  /* const navigate = useNavigate(); */
  const [latestArticles, setLatestArticles] = useState([]);

  /* Get the latest articles */
  useEffect(() => {
    const getLatestArticles = () => {
      fetch(`${VITE_BACKEND_URL}/articles-latest`)
        .then((response) => response.json())
        .then((data) => {
          setLatestArticles(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getLatestArticles();
  }, []);

  return (
    latestArticles && (
      <section className="h-[80vh]">
        <ul>
          {latestArticles?.map((article) => (
            <li key={article.id}>
              <Link to={`/articles/${article.id}`}>
                <h3>{article.title}</h3>
              </Link>
              <p>
                by {article.username}, the{"  "}
                {article.creationDate
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("/")}
              </p>
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
