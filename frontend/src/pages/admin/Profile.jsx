import React, { /* useState, */ useRef } from "react";
/* import { useNavigate } from "react-router-dom";
 */ import { useCurrentUserContext } from "../../contexts/userContext";
import profilePictureEmpty from "../../assets/others/profilePictureEmpty.svg";

const { VITE_BACKEND_URL } = import.meta.env;

function Profile() {
  const avatarRef = useRef(null);
  /* const navigate = useNavigate(); */

  const { currentUser, setCurrentUser, token } = useCurrentUserContext();

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
          setCurrentUser({
            ...currentUser,
            profilePicture: results.picture,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <main className="border bg-main-white h-screen w-screen flex ">
      <aside className="hidden w-1/2 border h-full lg:flex items-center">
        {/* ~~ Favorites and Pictures ~~ */}
        <div className="w-full">
          <h2>Favorites</h2>
          <h2>Images</h2>
        </div>
        <div className="border-r-2  border-main-dark opacity-60 h-4/5" />
      </aside>
      <section className="w-1/2 flex flex-col justify-center items-center border">
        {/* ~~ Profile Management ~~ */}
        <h2 className="text-3xl  font-serif">My Profile</h2>
        <h3 className="text-xl font-serif">Hello, {currentUser.username} </h3>
        {/* Image */}
        <form onSubmit={handleSubmitAvatar} encType="multipart/form-data">
          <label htmlFor="image-upload">
            <img
              src={
                currentUser?.profilePicture === null
                  ? profilePictureEmpty
                  : `${VITE_BACKEND_URL}/avatars/${currentUser?.profilePicture}`
              }
              alt="userImage"
              className="object-fit  w-36 h-36 md:w-48  md:h-48  rounded-full "
            />
          </label>

          <input type="file" ref={avatarRef} />
          <button type="submit"> button </button>
        </form>
        {/* Informations */}
      </section>
    </main>
  );
}

export default Profile;
