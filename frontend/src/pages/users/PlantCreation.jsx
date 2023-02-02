import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

/* Components */
import PreviousBtn from "@components/PreviousBtn";
import plantUpload from "../../assets/others/plantUpload.jpg";

/* Hooks, contexts and .env */
import { useCurrentUserContext } from "../../contexts/userContext";
import { useNotifications } from "../../hooks/useNotifications";

const { VITE_BACKEND_URL } = import.meta.env;

function PlantCreation() {
  const [plantTitle, setPlantTitle] = useState("");
  const [plantImg, setPlantImg] = useState(null);
  const [plantContent, setPlantContent] = useState("");

  const { notifyPost, notifyPostError } = useNotifications();
  const { currentUser, token } = useCurrentUserContext();

  /* Image Upload */
  const plantPicture = useRef(null);
  const navigate = useNavigate();
  const userID = currentUser.id;
  /* Submit Picture with Post Method */
  const handleSubmitPicture = (e) => {
    if (plantTitle.length <= 10) {
      return notifyPostError();
    }
    e.preventDefault();
    if (plantPicture.current.files[0]) {
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      /* formdata need to recieve userID, plantTitle and plantPicture */
      const formData = new FormData();
      formData.append("picture", plantPicture.current.files[0]);
      formData.append("user_id", userID);
      formData.append("title", plantTitle);
      formData.append("content", plantContent);

      const requestOptions = {
        method: "POST",
        headers: myHeader,
        body: formData,
      };
      fetch(`${VITE_BACKEND_URL}/pictures`, requestOptions)
        .then((response) => response.json())
        .then((results) => {
          console.warn("results", results);
          setPlantImg(results);
          notifyPost();
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  /* Post the plant */
  const handleSubmitPlant = (e) => {
    e.preventDefault();
    notifyPost();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <section className="h-[80vh]">
      <Toaster reverseOrder={false} position="top-center" />

      <PreviousBtn />
      <h2 className="text-center my-6 text-xl">POST A PLANT</h2>
      <div className="w-full h-full  lg:flex p-[5%]">
        <form
          onSubmit={handleSubmitPlant}
          className="relative lg:w-1/2  lg:border-r-2 lg:h-4/5 border-second-dark"
        >
          {/* Title of the article */}
          <label htmlFor="title" className="font-serif text-2xl w-20 px-3">
            Title
          </label>
          <input
            onChange={(e) => setPlantTitle(e.target.value)}
            name="title"
            minLength={10}
            maxLength={80}
            id="title"
            placeholder="My beautiful Monstera Deliciosa ... (min. 10 - max. 80 chars.)"
            type="text"
            required
            className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-second-dark"
          />
          <p className="px-3">
            by {currentUser.username}, the{" "}
            {Date().slice(0, 10).split("-").reverse().join("/")}
          </p>

          <div className=" flex flex-col  mx-3 my-6 w-5/6 border-2 border-main-dark ">
            <textarea
              onChange={(e) => setPlantContent(e.target.value)}
              id="content"
              name="content"
              rows="5"
              cols="33"
              className="bg-main-white focus-ring-0 border-0 p-2"
              placeholder="Look at this fabulous Monstera Deliciosa ! This is a gift from my boyfriend. I am so exited to show you my new plant ! "
            />
          </div>

          <label
            htmlFor="image-upload"
            className="w-full flex justify-center my-8"
          >
            <p
              alt="Upload Icon"
              className={`text-sm  font-semibold h-12 shadow-md text-center justify-center flex items-center border-2 rounded-lg border-main-dark opacity-70 w-20 hover:scale-110 ${
                plantTitle.length > 10
                  ? " "
                  : " opacity-40 hover:scale-100 cursor-not-allowed"
              } `}
            >
              UPLOAD{" "}
            </p>
          </label>

          <input
            ref={plantPicture}
            type="file"
            id="image-upload"
            onChange={handleSubmitPicture}
            accept="image/*"
            className="hidden"
          />
        </form>
        {/* Content of the article */}
        <aside className="lg:w-1/2 flex md:items-center justify-center px-6 my-6 h-96">
          <img
            src={
              plantImg
                ? `${VITE_BACKEND_URL}/pictures/${plantImg?.picture}`
                : plantUpload
            }
            alt="userImage"
            className={` ${
              plantImg ? "" : "grayscale"
            } w-fit lg:w-3/6 h-96 lg:h-fit border-[1px] border-second-dark shadow-md `}
          />
        </aside>
      </div>
    </section>
  );
}

export default PlantCreation;
