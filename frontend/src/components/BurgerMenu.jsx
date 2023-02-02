import React from "react";
import { useNavigate } from "react-router-dom";

/* Components */
import MenuBurgerLink from "./MenuBurgerLink";

/* Style and images */
import loginIcon from "../assets/icons/Framelogin.svg";

/* Hooks, contexts and .env */
import { useCurrentUserContext } from "../contexts/userContext";

function BurgerMenu({ open, setOpen }) {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useCurrentUserContext();
  /* To log out */
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("favorites");
    setCurrentUser({});
    navigate("/");
  };

  return (
    <nav className="bg-main-dark text-main-white w-screen lg:w-fit p-8 h-screen">
      <ul
        className="flex flex-col gap-8 justify-evenly"
        onClick={() => setOpen(!open)}
        role="presentation"
      >
        <MenuBurgerLink link="/" text="HOME" />
        <MenuBurgerLink link="/articles" text="ARTICLES" />
        <MenuBurgerLink link="/plants" text="PLANTS" />

        {/* Registers only */}
        {currentUser.username && (
          <MenuBurgerLink link="/create-plant" text="ADD PLANT" />
        )}

        {/* Admins only */}
        {currentUser.admin === 1 && (
          <>
            <MenuBurgerLink link="/create-article" text="ADD ARTICLE" />
            <MenuBurgerLink link="/users-management" text="MEMBERS" />
            <MenuBurgerLink link="/articles-management" text="MY ARTICLES" />
          </>
        )}

        <MenuBurgerLink link="/aboutus" text="ABOUT US" />

        <button
          type="button"
          onClick={
            currentUser.username
              ? () => navigate("/profile")
              : () => navigate("/login")
          }
          className="flex items-center gap-2 p-3 rounded-md bg-main-white text-main-dark "
        >
          <img src={loginIcon} alt="Way to login" />
          {currentUser.username
            ? `${currentUser.username.toUpperCase()}`
            : "LOGIN"}
        </button>
        <button
          type="button"
          onClick={currentUser.username ? logOut : () => navigate("/register")}
          className=" underline lg:flex text-main-white bg-main-dark px-6 font-sans items-center text-lg"
        >
          {currentUser.username ? "DISCONNECT" : "REGISTER"}
        </button>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
