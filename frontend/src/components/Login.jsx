import React, { useState } from "react";
import { useCurrentUserContext } from "../contexts/userContext";
import flowers from "../assets/others/flowers.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function Login() {
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
          setCurrentUser(result.user);
          setToken(result.token);
        }
      })
      .catch((error) => console.warn(error));
  };

  return (
    <section className=" relative z-[2] font-serif flex flex-col grow border m-6 items-center justify-center  ">
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
      <h2 className="text-4xl"> Register</h2>
      <h3 className="text-lg">
        or <span className="underline">create an account</span>
      </h3>

      <form
        onSubmit={handleSubmitLogin}
        className="flex flex-col w-full m-8 p-8 gap-10"
      >
        <article className="flex gap-6 py-8">
          <label htmlFor="username" className="text-2xl w-20">
            Username
          </label>
          <input
            onChange={handleInputChange}
            name="username"
            id="username"
            type="text"
            required
            className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-main-dark opacity-60"
          />
        </article>
        <article className="flex gap-6 mb-8">
          <label htmlFor="password" className="text-2xl w-20">
            Password
          </label>
          <input
            onChange={handleInputChange}
            name="password"
            id="password"
            type="password"
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
    </section>
  );
}

export default Login;
