import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PreviousBtn from "@components/PreviousBtn";
import { useCurrentArticleContext } from "../../contexts/articleContext";

function ArticlesPages() {
  const navigate = useNavigate();
  const { allArticles } = useCurrentArticleContext();

  /* Search Bar */
  const [search, setSearch] = useState("");
  /* Make the search "normalized" to match with extended regex */
  const normalizeSearch = search
    ?.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f+.]/g, "");

  const filtredAllArticles = allArticles?.filter((article) =>
    article.title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(normalizeSearch)
  );

  /* Pagination */
  /* Get the current Page and max tutorials to define pages */
  const [currentPage, setCurrentPage] = useState(1);
  const articlePerPage = 4;

  /* Calculate the first and last index  for slice */
  const indexOfLastArticle = currentPage * articlePerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage;

  /* HandlePage with the currentPage number */
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  /* Generate a page by the length */
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allArticles.length / articlePerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    filtredAllArticles && (
      <section className="h-[80vh]">
        <PreviousBtn />
        <h2 className="text-center my-6 text-xl">ARTICLES</h2>
        <label className="w-full flex justify-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="An invitation to the botanic ..."
            className="lg:w-2/6 w-4/6 p-3 border-[1px] border-main-dark rounded-xl opacity-60"
          />
        </label>
        <div className="w-full h-full  flex flex-col  gap-10 p-[5%]">
          {filtredAllArticles.length === 0 && (
            <p className="text-center text-xl">
              No article found with this name
            </p>
          )}
          {filtredAllArticles
            ?.slice(indexOfFirstArticle, indexOfLastArticle)
            .map((article) => (
              <article
                key={article.id}
                className="flex justify-between hover:scale-105 duration-300 hover:text-[#404040] h-full"
              >
                <div className="border-b-[1px] border-[#797979] w-full">
                  <Link to={`/articles/${article.id}`}>
                    <h3 className="font-semibold text-md lg:text-xl   w-72 lg:w-96">
                      {article.title.toUpperCase()}
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
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/articles/${article.id}`)}
                  className=" text-sm font-semibold h-12 shadow-md text-center border-[1px] rounded-lg border-main-dark opacity-70 w-20 hover:scale-110 duration-300"
                >
                  Read
                </button>
              </article>
            ))}
          {/* Pagination */}
          <div className="flex  justify-center gap-3 mt-3 mb-6">
            {pageNumbers.map((number) => (
              <button
                type="button"
                className={` text-xl w-8 h-8  rounded-md ${
                  number === currentPage
                    ? "bg-main-dark text-main-white"
                    : "bg-main-white border-[1px] border-main-dark"
                } `}
                key={number}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default ArticlesPages;
