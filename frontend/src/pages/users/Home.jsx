import AnimationHome from "@components/AnimationHome";
import React, { useState, useEffect } from "react";
import { /* useNavigate */ Link } from "react-router-dom";

const { VITE_BACKEND_URL } = import.meta.env;

export default function Home() {
  /* const navigate = useNavigate(); */
  const [latestArticles, setLatestArticles] = useState([]);
  const [latestPlants, setLatestPlants] = useState([]);

  /* Get the latest articles ordered by creation date */
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

  /* Get the latest plants */
  useEffect(() => {
    const getLatestPlants = () => {
      fetch(`${VITE_BACKEND_URL}/plants-latest`)
        .then((response) => response.json())
        .then((data) => {
          setLatestPlants(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getLatestPlants();
  }, []);

  return (
    latestArticles &&
    latestPlants && (
      <main className="h-[80vh]">
        {/* News section */}
        <section className="m-8 mb-[4%]">
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
        {/*         <div className="flex justify-center mx-auto border-b-[1px] lg:border-b-[2px] border-main-dark w-11/12" />
         */}
        {/*  */}
        <AnimationHome />

        {/* Plants section */}
        <section className="m-8">
          <h2 className=" text-xl lg:text-2xl">
            LATEST PLANTS{" "}
            <span className="px-3 text-sm underline">
              <Link to="/plants">view all</Link>
            </span>
          </h2>

          <ul className="flex flex-col md:flex-wrap lg:justify-evenly lg:flex-row mt-6 items-center gap-6">
            {latestPlants?.map((plant) => (
              <li
                key={plant.id}
                className="border-[1px] border-main-dark   h-fit w-60 hover:scale-105 duration-300 hover:contrast-50"
              >
                <Link to={`/plants/${plant.id}`}>
                  <img
                    src={`${VITE_BACKEND_URL}/pictures/${plant.picture}`}
                    alt={plant.title}
                    className="h-48 w-60 object-cover"
                  />{" "}
                  <h3 className="font-semibold text-md   w-100 lg:w-72 flex  pr-8">
                    {plant.title
                      ?.toUpperCase()
                      .slice(0, 25)
                      .replace(/.$/, "...")}
                  </h3>
                  <p>
                    by {plant.username}, the{"  "}
                    {plant.creationDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    )
  );
}
