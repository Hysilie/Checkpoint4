import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import previousBtn from "@assets/icons/FramereturnArrow.svg";
import FavoriteAndPicture from "@components/FavoriteAndPicture";
import { toast, Toaster } from "react-hot-toast";
import { useCurrentFavoriteContext } from "../../contexts/favoriteContext";
import { useCurrentUserContext } from "../../contexts/userContext";
import profilePictureEmpty from "../../assets/others/profilePictureEmpty.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function Profile() {
  const avatarRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, token } = useCurrentUserContext();
  const { myFavorites } = useCurrentFavoriteContext();

  const [myPictures, setMyPictures] = useState([1, 2]);
  const [userSettings, setUserSettings] = useState({
    username: currentUser?.username,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserSettings({
      ...userSettings,
      [name]: value,
    });
  };

  /* Notification */
  const notifyChange = () =>
    toast.success(`Changes have been made`, {
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

  const notifyImage = () =>
    toast.success(`Your profile picture has been uploaded`, {
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

  const notifyError = () =>
    toast.error("Username is already used", {
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

  /* Update the avatar */
  const handleSubmitAvatar = (e) => {
    e.preventDefault();
    if (avatarRef.current.files[0]) {
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const formData = new FormData();
      formData.append("profilePicture", avatarRef.current.files[0]);

      const requestOptions = {
        method: "PUT",
        headers: myHeader,
        body: formData,
      };

      fetch("http://localhost:5000/avatars", requestOptions)
        .then((response) => response.json())
        .then((results) => {
          notifyImage();
          setCurrentUser({
            ...currentUser,
            profilePicture: results.picture,
            username: userSettings.username,
          });
        })
        .catch((error) => {
          notifyError();
          console.error(error);
        });
    }
  };

  /* Update User's informations */
  const submitUpdate = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      username: userSettings.username,
      id: currentUser.id,
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body,
      redirect: "follow",
    };

    fetch(`${VITE_BACKEND_URL}/users/${currentUser.id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          return notifyError();
        }
        notifyChange();
        setCurrentUser({
          ...currentUser,
          username: userSettings.username,
        });
      })
      .catch((error) => {
        notifyError();
        console.error(`Error:`, error);
      });
  };

  /* Get all pictures from the user */
  const getMyPictures = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${VITE_BACKEND_URL}/plants/user/${currentUser.id}`, requestOptions)
      .then((response) => response.json())
      .then((results) => {
        setMyPictures(results);
      })
      .catch((error) => console.error(`Error:`, error));
  };

  useEffect(() => {
    getMyPictures();
  }, []);

  /* Pagination */
  /* Get the current Page and max tutorials to define pages */
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageFavorite, setCurrentPageFavorite] = useState(1);

  const picturesPerPage = 4;
  const favoritesPerPage = 4;

  /* Calculate the first and last index  for slice */
  const indexOfLastPicture = currentPage * picturesPerPage;
  const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
  const indexOfLastFavorite = currentPageFavorite * favoritesPerPage;
  const indexOfFirstFavorite = indexOfLastFavorite - favoritesPerPage;

  /* HandlePage with the currentPage number */
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePageChangeFavorite = (pageNumberFavorite) =>
    setCurrentPageFavorite(pageNumberFavorite);

  /* Generate a page by the length */
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(myPictures?.length / picturesPerPage);
    i += 1
  ) {
    pageNumbers.push(i);
  }

  const pageNumberFavorite = [];
  for (
    let i = 1;
    i <= Math.ceil(myFavorites.length / favoritesPerPage);
    i += 1
  ) {
    pageNumberFavorite.push(i);
  }

  return (
    <main className=" bg-main-white h-screen w-screen flex flex-col lg:flex-row ">
      <Toaster reverseOrder={false} position="top-center" />
      <button
        type="button"
        onClick={() => navigate("/")}
        className="absolute lg:p-6 flex items-center gap-3"
      >
        <img src={previousBtn} alt="Return button" />
        BACK TO HOME
      </button>
      {/* ~~ Favorites and Pictures ~~ */}
      <aside className="hidden lg:w-2/4 px-3 h-full lg:flex items-center">
        <FavoriteAndPicture
          indexOfLastPicture={indexOfLastPicture}
          indexOfLastFavorite={indexOfLastFavorite}
          indexOfFirstPicture={indexOfFirstPicture}
          indexOfFirstFavorite={indexOfFirstFavorite}
          pageNumbers={pageNumbers}
          pageNumberFavorite={pageNumberFavorite}
          currentPage={currentPage}
          currentPageFavorite={currentPageFavorite}
          myPictures={myPictures}
          handlePageChange={handlePageChange}
          handlePageChangeFavorite={handlePageChangeFavorite}
          myFavorites={myFavorites}
        />
        <div className="border-r-2  border-main-dark opacity-60 h-4/5" />
      </aside>
      {/* ~~ Profile Management ~~ */}
      <section className="w-full h-full mt-[10%] md:mt-0 lg:w-1/2 flex flex-col justify-center items-center ">
        <h2 className="text-3xl  font-serif">My Profile</h2>
        <h3 className="text-xl font-serif mb-8">
          Hello, {currentUser.firstname} @ {currentUser.username}{" "}
        </h3>
        {/* Image */}
        <form encType="multipart/form-data" className="mt-8">
          <label htmlFor="image-upload">
            <img
              src={
                currentUser?.profilePicture === "" ||
                currentUser?.profilePicture === null
                  ? profilePictureEmpty
                  : `${VITE_BACKEND_URL}/avatars/${currentUser?.profilePicture}`
              }
              alt="userImage"
              className={`object-fit  w-36 h-36 md:w-48  md:h-48  rounded-full ${
                currentUser?.profilePicture === "" ||
                (currentUser?.profilePicture === null && "grayscale")
              } `}
            />
          </label>
          <input
            ref={avatarRef}
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleSubmitAvatar}
            className="hidden"
          />
        </form>
        {/* Informations */}

        <div className="mt-8 mb-8 w-6/12">
          <article className="flex gap-6 mb-8">
            <label htmlFor="firstname" className="text-xl w-28">
              Username
            </label>
            <input
              onChange={handleInputChange}
              name="username"
              id="username"
              pattern="[a-zA-Z-]+"
              minLength="3"
              placeholder={currentUser.username}
              type="text"
              required
              className="bg-main-white w-10/12 focus:ring-0 border-b-2 border-main-dark opacity-60"
            />
          </article>
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={submitUpdate}
              className="mt-8 text-md  h-12 shadow-md text-center border-2 rounded-lg text-main-white bg-main-dark  w-20 hover:scale-110 duration-300"
            >
              {" "}
              SAVE{" "}
            </button>
          </div>
        </div>
      </section>

      <aside className=" lg:hidden px-3   items-center">
        <div className="border-b-2  my-6 flex justify-center items-center border-main-dark opacity-60  w-full mx-auto" />

        <FavoriteAndPicture
          indexOfLastPicture={indexOfLastPicture}
          indexOfLastFavorite={indexOfLastFavorite}
          indexOfFirstPicture={indexOfFirstPicture}
          indexOfFirstFavorite={indexOfFirstFavorite}
          pageNumbers={pageNumbers}
          pageNumberFavorite={pageNumberFavorite}
          currentPage={currentPage}
          currentPageFavorite={currentPageFavorite}
          myPictures={myPictures}
          handlePageChange={handlePageChange}
          handlePageChangeFavorite={handlePageChangeFavorite}
          myFavorites={myFavorites}
        />
      </aside>
    </main>
  );
}

export default Profile;
