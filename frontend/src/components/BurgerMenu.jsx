import React from "react";
import { useCurrentUserContext } from "../contexts/userContext";

function BurgerMenu() {
  const { currentUser } = useCurrentUserContext();

  return (
    <nav>
      <ul className="flex flex-col justify-evenly">
        <li>HOME</li>
        <li>NEWS</li>
        <li>OUR PLANTS</li>

        {/* Registers only */}
        {currentUser.username && <li>ADD PLANT</li>}
        {currentUser.username && <li>ADD ARTICLE</li>}
        {/* Admins only */}
        {currentUser.admin === 1 && <li>OUR MEMBERS</li>}

        <li>FOLLOW US</li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
