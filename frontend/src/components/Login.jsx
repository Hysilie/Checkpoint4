import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useCurrentUserContext } from "../contexts/userContext";
import flowers from "../assets/others/flowers.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function Login() {
  const navigate = useNavigate();
  const { setCurrentUser, setToken } = useCurrentUserContext();

  /* Get the user informations to send to the body of the fetch */
  const [userLoginInformations, setUserLoginInformations] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserLoginInformations({
      ...userLoginInformations,
      [name]: value,
    });
  };

  const notifyConnexion = () =>
    toast.success(`Welcome ${userLoginInformations.username}`, {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "#333",
      },
    });

  const notifyErrorConnexion = () =>
    toast.error(`Informations incorrect`, {
      style: {
        border: "1px solid #eee",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "40px",
        paddingRight: "40px",
        color: "#eee",
        backgroundColor: "#333",
      },
      iconTheme: {
        primary: "#eee",
        secondary: "red",
      },
    });

  /* Fetch user's informations to login */
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify(userLoginInformations);

    fetch(`${VITE_BACKEND_URL}/login`, {
      method: "POST",
      redirect: "follow",
      body,
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          notifyConnexion();
          setCurrentUser(result.user);
          setToken(result.token);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          notifyErrorConnexion();
        }
      })
      .catch((error) => {
        console.warn(error);
        notifyErrorConnexion();
      });
  };

  return (
    <section className=" relative z-[2] font-serif flex flex-col grow  m-6 items-center justify-center  ">
      <Toaster reverseOrder={false} position="top-center" />
      {/* Hidden for medium screen */}
      <div className=" lg:hidden m-6 font-bold">
        <img
          src={flowers}
          alt="Flowers"
          className="absolute z-[-10] h-50 top-[-10%] left-[-20%]"
        />
        <h1 className="text-4xl ">Welcome to Plants</h1>
      </div>

      {/* Global screens */}
      <h2 className="text-4xl"> Login</h2>
      <h3 className="text-lg">
        or{" "}
        <span className="underline">
          <Link to="/register">create an account</Link>
        </span>
      </h3>

      <form
        onSubmit={handleSubmitLogin}
        className="flex flex-col w-full m-8 p-8 gap-10"
      >
        {/* Username */}
        <article className="flex gap-6 py-8">
          <label htmlFor="username" className="text-2xl w-20">
            Username
          </label>
          <input
            pattern="[a-zA-Z0-9-]+"
            minLength="3"
            maxLength="20"
            onChange={handleInputChange}
            name="username"
            id="username"
            placeholder="Dark-Belladone"
            type="text"
            required
            className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-main-dark opacity-60"
          />
        </article>
        {/* Password */}
        <article className="flex gap-6 mb-8">
          <label htmlFor="password" className="text-2xl w-20">
            Password
          </label>
          <input
            onChange={handleInputChange}
            name="password"
            id="password"
            type="password"
            minLength="8"
            maxLength="30"
            title="Should contain a minimum of 8 characters, using a mix of uppercase and lowercase letters, numbers, and special characters."
            /* 8 chars. 1 lower . 1 Upper . 1 special . 1 number */
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            placeholder="********"
            required
            className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-main-dark opacity-60"
          />
        </article>

        <div className="flex my-6 justify-center">
          <button
            type="submit"
            className=" text-xl h-12 shadow-md text-center border-2 rounded-lg border-main-dark opacity-70 w-20 hover:scale-110 duration-300"
          >
            <p>Login</p>
          </button>
        </div>
      </form>
      <h3 className="underline">
        <Link to="/">or continue without login</Link>
      </h3>
    </section>
  );
}

export default Login;
