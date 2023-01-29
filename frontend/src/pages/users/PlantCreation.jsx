import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PreviousBtn from "@components/PreviousBtn";
import uploadImg from "@assets/icons/FrameuploadImg.svg";
import plantUpload from "../../assets/others/plantUpload.jpg";
import { useCurrentUserContext } from "../../contexts/userContext";

const { VITE_BACKEND_URL } = import.meta.env;

function PlantCreation() {
  const navigate = useNavigate();
  const { currentUser, token } = useCurrentUserContext();
  const userID = currentUser.id;

  /* Get Title of the post */
  const [plantTitle, setPlantTitle] = useState("");

  /* Image Upload */
  const plantPicture = useRef(null);

  const handleSubmitPicture = (e) => {
    e.preventDefault();
    if (plantPicture.current.files[0]) {
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      /* formdata need to recieve userID, plantTitle and plantPicture */
      const formData = new FormData();
      formData.append("picture", plantPicture.current.files[0]);
      formData.append("user_id", userID);
      formData.append("title", plantTitle);

      const requestOptions = {
        method: "POST",
        headers: myHeader,
        body: formData,
      };
      fetch(`${VITE_BACKEND_URL}/pictures`, requestOptions)
        .then((response) => response.text())
        .then((results) => {
          console.warn("results", results);
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleSubmitArticle = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="h-[80vh]">
      <PreviousBtn />
      <h2 className="text-center my-6 text-xl">POST A PLANT</h2>
      <form
        onSubmit={handleSubmitArticle}
        className="w-full h-full  lg:flex p-[5%]"
      >
        <article className="relative lg:w-1/2  lg:border-r-2 lg:h-4/5 border-second-dark">
          {/* Title of the article */}
          <label htmlFor="title" className="font-serif text-2xl w-20 px-3">
            Title
          </label>
          <input
            onChange={(e) => setPlantTitle(e.target.value)}
            name="title"
            maxLength={80}
            id="title"
            placeholder="My beautiful Monstera Deliciosa ... (max. 80 chars.)"
            type="text"
            required
            className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-second-dark"
          />
          <p className="px-3">
            by {currentUser.username}, the{" "}
            {Date().slice(0, 10).split("-").reverse().join("/")}
          </p>
          <label
            htmlFor="image-upload"
            className="w-full flex justify-center my-8"
          >
            <img
              src={uploadImg}
              alt="Upload Icon"
              className=" cursor-pointer"
            />
          </label>

          <input
            ref={plantPicture}
            type="file"
            id="image-upload"
            onChange={handleSubmitPicture}
            accept="image/*"
            className="hidden"
          />
        </article>
        {/* Content of the article */}
        <aside className="lg:w-1/2 flex md:items-center justify-center px-6 my-6 h-96">
          <img
            src={plantUpload}
            alt="userImage"
            className="  grayscale w-fit lg:w-3/6 h-96 lg:h-fit border-[1px] border-second-dark shadow-md "
          />
        </aside>
        {/* Buttons */}
        {/*   <div className="lg:absolute lg:bottom-60 flex w-full lg:w-1/2 justify-center  lg:justify-start gap-10 px-3">
          <button
            type="submit"
            className=" text-sm font-semibold h-12 shadow-md text-center border-2 rounded-lg border-main-dark opacity-70 w-20 hover:scale-110 duration-300"
          >
            PUBLISH
          </button>
        </div> */}
      </form>
    </section>
  );
}

export default PlantCreation;
