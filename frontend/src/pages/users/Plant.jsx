import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PreviousBtn from "@components/PreviousBtn";
import fav from "@assets/icons/Framefav.svg";
import nofav from "@assets/icons/Framenofav.svg";
import { useCurrentUserContext } from "../../contexts/userContext";
import { useCurrentFavoriteContext } from "../../contexts/favoriteContext";

const { VITE_BACKEND_URL } = import.meta.env;

export default function Plant() {
  const { myFavorites, setMyFavorites, getMyFavorites } =
    useCurrentFavoriteContext();
  const { currentUser, token } = useCurrentUserContext();
  const { id } = useParams();
  const [favorite, setFavorite] = useState(false);
  const [plant, setPlant] = useState([]);
  const plantID = parseInt(id, 10);
  /* Get the article by his id, get by params */
  useEffect(() => {
    const getPlant = () => {
      fetch(`${VITE_BACKEND_URL}/plants/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPlant(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getPlant();
  }, []);

  const addFavorite = () => {
    const checkFavorite = myFavorites?.some(
      (myfavorite) => myfavorite.plant_id === plantID
    );

    if (!checkFavorite) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        plant_id: plantID,
        user_id: currentUser.id,
        favorite: 1,
      });

      fetch(`http://localhost:5000/favorites`, {
        method: "POST",
        headers: myHeaders,
        body,
        redirect: "follow",
      })
        .then((response) => {
          if (response.ok) {
            setMyFavorites(...myFavorites, {
              plant_id: id,
              user_id: currentUser.id,
              favorite: 1,
            });
          }
        })
        .catch((error) => {
          console.warn(error);
        });
    }
    setFavorite(true);
  };

  const removeFavorite = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      plant_id: plantID,
      user_id: currentUser.id,
    });

    fetch(`http://localhost:5000/favorites`, {
      method: "DELETE",
      headers: myHeaders,
      body,
      redirect: "follow",
    })
      .then((response) => {
        if (response.ok) {
          getMyFavorites();
        }
      })
      .catch((error) => {
        console.warn(error);
      });

    setFavorite(false);
  };

  return (
    <section className="h-[80vh]">
      <PreviousBtn />
      <h2 className="text-center my-6 text-xl">PLANT</h2>

      <div className="w-full h-full items-center lg:flex pt-[15%] lg:p-[5%]">
        <article className="relative lg:w-1/2  lg:border-r-2 lg:h-96  border-second-dark ">
          {/* Title of the article */}
          <h3 className="font-serif font-semibold text-2xl w-100 lg:w-4/6 px-3">
            {plant.title?.toUpperCase()}
          </h3>

          <p className="px-3">
            by {plant.username}, the{" "}
            {plant.creationDate?.slice(0, 10).split("-").reverse().join("/")}
          </p>
          <button
            type="button"
            className="px-2 my-3"
            onClick={!favorite ? addFavorite : removeFavorite}
          >
            <img src={favorite ? fav : nofav} alt="Favorite button" />
          </button>
        </article>
        {/* Content of the article */}
        <aside className="lg:w-1/2 flex md:items-center justify-center px-6 my-6 h-96">
          <img
            src={`${VITE_BACKEND_URL}/pictures/${plant.picture}`}
            alt="userImage"
            className="   w-fit lg:w-3/6 h-96 lg:h-fit border-[1px] border-second-dark shadow-md "
          />
        </aside>
      </div>
    </section>
  );
}
