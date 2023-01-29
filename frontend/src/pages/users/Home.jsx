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
      <main className="h-[80vh]">
        {/* News section */}
        <section className="m-8">
          <h2 className=" text-xl lg:text-2xl">
            NEWS{" "}
            <span className="px-3 text-sm underline">
              <Link to="/articles">view all</Link>
            </span>
          </h2>
          <ul className="flex flex-col gap-3 py-3 lg:p-0 lg:flex-row justify-evenly lg:m-8">
            {latestArticles?.map((article, index) => (
              <li
                key={article.id}
                className={`  lg:h-24 hover:scale-105 duration-300 hover:text-[#404040] ${
                  index < 2
                    ? "lg:border-r-[1px] lg:border-main-dark"
                    : "lg:border-r-[0px]"
                } `}
              >
                <Link to={`/articles/${article.id}`}>
                  <h3 className="font-semibold text-md lg:text-xl   w-100 lg:w-72 flex  pr-8">
                    {article.title?.toUpperCase()}
                  </h3>
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
        <div className="flex justify-center mx-auto border-b-[2px] border-main-dark w-11/12" />
        {/* Plants section */}
      </main>
    )
  );
}
