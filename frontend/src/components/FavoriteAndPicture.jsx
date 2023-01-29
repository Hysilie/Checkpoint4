import React from "react";
import { Link } from "react-router-dom";

const { VITE_BACKEND_URL } = import.meta.env;

function FavoriteAndPicture({
  myPictures,
  indexOfFirstPicture,
  indexOfLastPicture,
  pageNumbers,
  handlePageChange,
  currentPage,
}) {
  return (
    <div className="w-full h-1/2 lg:h-[80vh]">
      <article className="h-1/2">
        <h2 className=" text-xl lg:text-2xl py-3">Favorites</h2>
      </article>

      <article className="h-1/2">
        <h2 className=" text-xl lg:text-2xl py-3">Images</h2>
        <ul className="flex flex-wrap gap-8 mx-auto lg:gap-0">
          {myPictures.length === 0 && <p>No picture shared</p>}
          {myPictures
            ?.slice(indexOfFirstPicture, indexOfLastPicture)
            .map((picture) => (
              <li
                key={picture.id}
                className="border-[1px] lg:m-6 border-main-dark   lg:w-36 h-fit w-32 hover:scale-105 duration-300 hover:contrast-50"
              >
                <Link to={`/plants/${picture.id}`}>
                  <img
                    src={`${VITE_BACKEND_URL}/pictures/${picture.picture}`}
                    alt={picture.title}
                    className="h-24 w-32 lg:w-36 lg:h-40 object-cover"
                  />{" "}
                  <h3 className="font-semibold text-md   w-100 lg:w-72 flex  pr-8">
                    {picture.title
                      ?.toUpperCase()
                      .slice(0, 15)
                      .replace(/.$/, "...")}
                  </h3>
                </Link>
              </li>
            ))}
        </ul>
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
      </article>
    </div>
  );
}

export default FavoriteAndPicture;
