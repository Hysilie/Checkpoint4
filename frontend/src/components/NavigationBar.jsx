import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";
import menuBurger from "../assets/icons/FrameburgerMenu.svg";
import loginIcon from "../assets/icons/Framelogin.svg";
import registerLinkArrow from "../assets/icons/FramearrowRightCorner.svg";

function NavigationBar() {
  const { currentUser, setCurrentUser } = useCurrentUserContext();

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("rewards");
    setCurrentUser({});
    navigate("/");
  };

  return (
    <nav className="w-full">
      {/* ~~ First bar ~~ */}
      <section className="flex w-full border-b-2 border-main-dark">
        {/* Menu Burger */}
        <div className="w-1/12 border-r-2 border-main-dark">
          <button type="button">
            <img src={menuBurger} alt="Menu burger button" />
          </button>
        </div>
        {/* Title */}
        <div className="w-10/12 lg:w-8/12 flex justify-center items-center">
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
                ? () => navigate("/")
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
          className="hidden  relative w-fit lg:flex text-main-white bg-main-dark px-6 font-sans items-center text-lg"
        >
          {currentUser.username ? "DISCONNECT" : "REGISTER"}
          <img
            src={registerLinkArrow}
            alt="Way to register"
            className="w-3 h-3 absolute top-3 right-0"
          />
        </button>
      </section>
      {/* ~~ Second bar ~~ */}
      <section className="hidden lg:block py-4 border-b-2 border-main-dark">
        <ul className="flex justify-evenly">
          <li>HOME</li>
          <li>NEWS</li>
          <li>OUR PLANTS</li>

          {/* Registers only */}
          {currentUser.username && <li>ADD PLANT</li>}
          {currentUser.username && (
            <li>
              {" "}
              <Link to="/create-article">ADD ARTICLE</Link>
            </li>
          )}
          {/* Admins only */}
          {currentUser.admin === 1 && <li>OUR MEMBERS</li>}

          <li>FOLLOW US</li>
        </ul>
      </section>
    </nav>
  );
}

export default NavigationBar;
