import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import flowers from "../assets/others/flowers.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function Register() {
  const navigate = useNavigate();
  /* Get the user informations to send to the body of the fetch */
  const [userRegisterInformations, setUserRegisterInformations] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserRegisterInformations({
      ...userRegisterInformations,
      [name]: value,
    });
  };

  /* Fetch user's informations to register */
  const handleSubmitRegister = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify(userRegisterInformations);

    fetch(`${VITE_BACKEND_URL}/register`, {
      method: "POST",
      headers: myHeaders,
      body,
      redirect: "follow",
    })
      .then((response) => {
        if (response.ok) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  return (
    <section className=" relative z-[2] font-serif flex flex-col grow  m-6 items-center justify-center  ">
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
      <h2 className="text-4xl"> Create an account</h2>
      <h3 className="text-lg">
        or{" "}
        <span className="underline">
          <Link to="/login">register</Link>
        </span>
      </h3>

      <form
        onSubmit={handleSubmitRegister}
        className="flex flex-col w-full m-8 p-8 gap-10"
      >
        {/* Firstname */}
        <article className="flex gap-6 ">
          <label htmlFor="firstname" className="text-2xl w-20">
            Firstname
          </label>
          <input
            onChange={handleInputChange}
            name="firstname"
            id="firstname"
            placeholder="Rose"
            type="text"
            required
            className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-main-dark opacity-60"
          />
        </article>
        {/* Username */}
        <article className="flex gap-6 ">
          <label htmlFor="username" className="text-2xl w-20">
            Username
          </label>
          <input
            onChange={handleInputChange}
            name="username"
            id="username"
            type="text"
            placeholder="Dark-Belladone"
            required
            className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-main-dark opacity-60"
          />
        </article>
        {/* Email */}
        <article className="flex gap-6 ">
          <label htmlFor="username" className="text-2xl w-20">
            E-mail
          </label>
          <input
            onChange={handleInputChange}
            name="email"
            id="email"
            type="email"
            placeholder="example@mail.com"
            required
            className="bg-main-white w-10/12  focus:ring-0 border-b-2 border-main-dark opacity-60"
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
            <p>Register</p>
          </button>
        </div>
      </form>
      <h3 className="underline">
        <Link to="/">or continue without login</Link>
      </h3>
    </section>
  );
}

export default Register;