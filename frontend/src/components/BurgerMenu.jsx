import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

function BurgerMenu({ open, setOpen }) {
  const { currentUser } = useCurrentUserContext();

  return (
    <nav className="bg-main-dark text-main-white w-screen lg:w-fit p-8 h-screen">
      <div className="flex flex-col gap-8 justify-evenly text-left">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="hover:scale-110 duration-150"
        >
          {" "}
          <Link to="/">
            HOME <hr />
          </Link>
        </button>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="hover:scale-110 duration-150"
        >
          <Link to="/articles">ARTICLES</Link> <hr />
        </button>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="hover:scale-110 duration-150"
        >
          OUR PLANTS <hr />
        </button>

        {/* Registers only */}
        {currentUser.username && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="hover:scale-110 duration-150"
          >
            ADD PLANT
            <hr />
          </button>
        )}
        {currentUser.username && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="hover:scale-110 duration-150"
          >
            <Link to="/create-article">ADD ARTICLE</Link>
            <hr />
          </button>
        )}

        {/* Admins only */}
        {currentUser.admin === 1 && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="hover:scale-110 duration-150"
          >
            OUR MEMBERS
            <hr />
          </button>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="hover:scale-110 duration-150"
        >
          FOLLOW US <hr />
        </button>
      </div>
    </nav>
  );
}

export default BurgerMenu;
