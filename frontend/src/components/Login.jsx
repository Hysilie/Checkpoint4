import React, { useState } from "react";
import { useCurrentUserContext } from "../contexts/userContext";

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
    <section className="font-serif flex flex-col grow border m-6 items-center ">
      <h2 className="text-4xl"> Register</h2>
      <h3 className="text-lg">
        or <span className="underline">create an account</span>
      </h3>

      <form onSubmit={handleSubmitLogin}>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleInputChange}
          name="username"
          id="username"
          type="text"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={handleInputChange}
          name="password"
          id="password"
          type="password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
