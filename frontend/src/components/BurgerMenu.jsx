import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

function BurgerMenu({ open, setOpen }) {
  const { currentUser } = useCurrentUserContext();

  return (
    <nav className="bg-main-dark text-main-white w-screen lg:w-fit p-8 h-screen">
      <ul
        className="flex flex-col gap-8 justify-evenly"
        onClick={() => setOpen(!open)}
        role="presentation"
      >
        <li className="hover:scale-110 duration-150">
          {" "}
          <Link to="/">
            HOME <hr />
          </Link>
        </li>

        <li className="hover:scale-110 duration-150">
          <Link to="/articles">ARTICLES</Link> <hr />
        </li>

        <li className="hover:scale-110 duration-150">
          OUR PLANTS <hr />
        </li>

        {/* Registers only */}
        {currentUser.username && (
          <li>
            ADD PLANT <hr />
          </li>
        )}
        {currentUser.username && (
          <li className="hover:scale-110 duration-150">
            <Link to="/create-article">ADD ARTICLE</Link>
            <hr />
          </li>
        )}

        {/* Admins only */}
        {currentUser.admin === 1 && (
          <li>
            OUR MEMBERS
            <hr />
          </li>
        )}

        <li className="hover:scale-110 duration-150">
          FOLLOW US <hr />
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
