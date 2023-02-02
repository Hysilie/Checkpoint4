import React from "react";
import { Link } from "react-router-dom";

/* Hooks, context and .env */
const { VITE_BACKEND_URL } = import.meta.env;

function FavoriteAndPicture({
  myPictures,
  myFavorites,
  /* Picture */
  indexOfFirstPicture,
  indexOfLastPicture,
  pageNumbers,
  handlePageChange,
  currentPage,
  /* Favorite */
  indexOfFirstFavorite,
  indexOfLastFavorite,
  pageNumberFavorite,
  handlePageChangeFavorite,
  currentPageFavorite,
}) {
  return (
    <div className="w-full   h-1/2 lg:h-[80vh] lg:flex lg:flex-col lg:mt-[10%]">
      <article className="h-fit h-min-1/2">
        <h2 className=" text-xl lg:text-2xl py-3">Favorites</h2>
        <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mx-auto lg:gap-0">
          {myFavorites?.length === 0 && <p>No picture liked</p>}
          {myFavorites
            ?.slice(indexOfFirstFavorite, indexOfLastFavorite)
            .map((favorite) => (
              <li
                key={favorite.id}
                className="border-[1px] lg:m-6 border-main-dark   lg:w-32 h-fit w-32 hover:scale-105 duration-300 hover:contrast-50"
              >
                <Link to={`/plants/${favorite.plant_id}`}>
                  <img
                    src={`${VITE_BACKEND_URL}/pictures/${favorite.picture}`}
                    alt={favorite.title}
                    className="h-24 w-32 lg:w-32 lg:h-24 object-cover"
                  />{" "}
                  <h3 className="font-semibold text-md   w-100 lg:w-72 flex  pr-8">
                    {favorite.title
                      ?.toUpperCase()
                      .slice(0, 7)
                      .replace(/.$/, "...")}
                  </h3>
                </Link>
              </li>
            ))}
        </ul>
        {/* Pagination */}
        <div className="flex  justify-center gap-3 mt-3 mb-6">
          {pageNumberFavorite?.length > 1 &&
            pageNumberFavorite?.map((number) => (
              <button
                type="button"
                className={` text-xl w-8 h-8  rounded-md ${
                  number === currentPageFavorite
                    ? "bg-main-dark text-main-white"
                    : "bg-main-white border-[1px] border-main-dark"
                } `}
                key={number}
                onClick={() => handlePageChangeFavorite(number)}
              >
                {number}
              </button>
            ))}
        </div>
      </article>

      <article className="h-fit h-min-1/2">
        <h2 className=" text-xl lg:text-2xl py-3">Images</h2>
        <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mx-auto lg:gap-0">
          {myPictures?.length === 0 && <p>No picture shared</p>}
          {myPictures
            ?.slice(indexOfFirstPicture, indexOfLastPicture)
            .map((picture) => (
              <li
                key={picture.id}
                className="border-[1px] lg:m-6 border-main-dark   lg:w-32 h-fit w-32 hover:scale-105 duration-300 hover:contrast-50"
              >
                <Link to={`/plants/${picture.id}`}>
                  <img
                    src={`${VITE_BACKEND_URL}/pictures/${picture.picture}`}
                    alt={picture.title}
                    className="h-24 w-32 lg:w-32 lg:h-24 object-cover"
                  />{" "}
                  <h3 className="font-semibold text-md   w-100 lg:w-72 flex  pr-8">
                    {picture.title
                      ?.toUpperCase()
                      .slice(0, 7)
                      .replace(/.$/, "...")}
                  </h3>
                </Link>
              </li>
            ))}
        </ul>
        {/* Pagination */}
        <div className="flex  justify-center gap-3 mt-3 mb-6">
          {pageNumbers?.length > 1 &&
            pageNumbers?.map((number) => (
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
      </article>
    </div>
  );
}

export default FavoriteAndPicture;
