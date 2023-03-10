import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/* Components */
import BurgerMenu from "./BurgerMenu";
import WeatherWidget from "./WeatherWidget";

/* Style and images */
import menuBurger from "../assets/icons/FrameburgerMenu.svg";
import closeMenuBurger from "../assets/icons/FramecloseMenu.svg";
import loginIcon from "../assets/icons/Framelogin.svg";
import registerLinkArrow from "../assets/icons/FramearrowRightCorner.svg";

/* Hooks, contexts and .env */
import { useCurrentUserContext } from "../contexts/userContext";
import NavigationBarLink from "./NavigationBarLink";

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const { currentUser, setCurrentUser } = useCurrentUserContext();

  const navigate = useNavigate();

  /* To log out */
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("favorites");
    setCurrentUser({});
    navigate("/");
  };

  /*  Close menu when click outside  */
  const concernedElement = document.getElementById("click-menu");
  document.addEventListener("mousedown", (event) => {
    if (concernedElement === null) {
      return;
    }
    if (
      !concernedElement.contains(event.target) &&
      event.target.id !== "menu-burger" &&
      event.target.id !== "menu-burger1" &&
      event.target.id !== "menu-burger2"
    ) {
      setOpen(false);
    }
  });

  return (
    <nav className="w-full">
      {/* ~~ First bar ~~ */}
      <section className=" flex w-full border-b-2 border-main-dark">
        {/* Menu Burger */}
        <div className=" relative w-1/12 border-r-2 flex justify-center border-main-dark">
          <button type="button" onClick={() => setOpen(!open)} id="menu-burger">
            {open ? (
              <img
                id="menu-burger1"
                src={closeMenuBurger}
                alt="Menu burger button to close"
              />
            ) : (
              <img
                id="menu-burger2"
                src={menuBurger}
                alt="Menu burger button to open"
              />
            )}
          </button>
          <div className="absolute z-40 top-[5.8vh] left-0" id="click-menu">
            {/* Open the menu burger */}
            {open ? <BurgerMenu open={open} setOpen={setOpen} /> : ""}
          </div>
        </div>

        {/* Title */}
        <div className="relative w-10/12 lg:w-8/12 flex justify-center items-center">
          <WeatherWidget />
          <h1 className="text-4xl font-serif text-center  ">
            {" "}
            <Link to="/">Plants</Link>
          </h1>
        </div>
        {/* Login */}
        <div className=" hidden w-2/12 lg:flex items-center justify-center border-l-2 border-main-dark px-3">
          <button
            type="button"
            onClick={
              currentUser.username
                ? () => navigate("/profile")
                : () => navigate("/login")
            }
            className="flex items-center gap-2 "
          >
            <img src={loginIcon} alt="Way to login" />
            {currentUser.username
              ? `${currentUser.username.toUpperCase()}`
              : "LOGIN"}
          </button>
        </div>
        {/* Register */}
        <button
          type="button"
          onClick={currentUser.username ? logOut : () => navigate("/register")}
          className="hidden  relative w-1/12 lg:flex text-main-white bg-main-dark px-3 font-sans items-center text-lg"
        >
          {currentUser.username ? "DISCONNECT" : "REGISTER"}
          <img
            src={registerLinkArrow}
            alt="Way to register"
            className="w-3 h-3 absolute   top-3 right-0"
          />
        </button>
      </section>
      {/* ~~ Second bar ~~ */}
      <section className="hidden lg:block py-4 border-b-2 border-main-dark">
        <ul className="flex justify-evenly">
          <NavigationBarLink link="/" text="HOME" />
          <NavigationBarLink link="/articles" text="ARTICLES" />
          <NavigationBarLink link="/plants" text="PLANTS" />

          {/* Registers only */}
          {currentUser.username && (
            <NavigationBarLink link="/create-plant" text="ADD PLANT" />
          )}

          {/* Admins only */}
          {currentUser.admin === 1 && (
            <>
              <NavigationBarLink link="/create-article" text="ADD ARTICLE" />
              <NavigationBarLink link="/users-management" text="MEMBERS" />
              <NavigationBarLink
                link="/articles-management"
                text="MY ARTICLES"
              />
            </>
          )}

          <NavigationBarLink link="/aboutus" text="ABOUT US" />
        </ul>
      </section>
    </nav>
  );
}

export default NavigationBar;
