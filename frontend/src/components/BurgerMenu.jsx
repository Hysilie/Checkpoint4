import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

function BurgerMenu() {
  const { currentUser } = useCurrentUserContext();

  return (
    <nav>
      <ul className="flex flex-col justify-evenly">
        <li>HOME</li>
        <li>
          <Link to="/articles">ARTICLES</Link>
        </li>
        <li>OUR PLANTS</li>

        {/* Registers only */}
        {currentUser.username && <li>ADD PLANT</li>}
        {currentUser.username && (
          <li>
            <Link to="/create-article">ADD ARTICLE</Link>
          </li>
        )}
        {/* Admins only */}
        {currentUser.admin === 1 && <li>OUR MEMBERS</li>}

        <li>FOLLOW US</li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
