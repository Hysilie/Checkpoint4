import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";
import loginIcon from "../assets/icons/Framelogin.svg";

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
          <Link to="/plants">PLANTS</Link> <hr />
        </li>

        {/* Registers only */}
        {currentUser.username && (
          <li>
            <Link to="/create-plant">ADD PLANT</Link> <hr />
          </li>
        )}
        {currentUser.admin === 1 && (
          <li className="hover:scale-110 duration-150">
            <Link to="/create-article">ADD ARTICLE</Link>
            <hr />
          </li>
        )}

        {/* Admins only */}
        {currentUser.admin === 1 && (
          <>
            <li>
              <Link to="/users-management">MEMBERS</Link> <hr />
            </li>
            <li className="hover:scale-110 duration-150">
              <Link to="/articles-management">MY ARTICLES</Link>
              <hr />
            </li>
          </>
        )}

        <li className="hover:scale-110 duration-150">
          FOLLOW US <hr />
        </li>
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
