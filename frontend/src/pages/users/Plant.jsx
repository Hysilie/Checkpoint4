import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

/* Components */
import PreviousBtn from "@components/PreviousBtn";
import DeleteModalePlant from "@components/DeleteModalePlant";

/* Styles and Images */
import fav from "@assets/icons/Framefav.svg";
import nofav from "@assets/icons/Framenofav.svg";
import trash from "@assets/icons/trash2.svg";

/* Hooks, contexts and .env */
import { Toaster } from "react-hot-toast";
import { useCurrentUserContext } from "../../contexts/userContext";
import { useCurrentFavoriteContext } from "../../contexts/favoriteContext";
import { useCurrentPlantContext } from "../../contexts/plantContext";
import { useNotifications } from "../../hooks/useNotifications";

const { VITE_BACKEND_URL } = import.meta.env;

export default function Plant() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { notifyDeleteSucess, notifyPlantError } = useNotifications();
  const { myFavorites, setMyFavorites, getMyFavorites } =
    useCurrentFavoriteContext();
  const { getAllPlants } = useCurrentPlantContext();
  const { currentUser, token } = useCurrentUserContext();

  /* Get the plant by ID */
  const [plant, setPlant] = useState([]);
  const plantID = parseInt(id, 10);

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

  /* Handle Favorite */
  const checkTheStatus = () =>
    myFavorites?.some((myfavorite) => myfavorite.plant_id === plantID);

  const [favorite, setFavorite] = useState(checkTheStatus);
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

  /* Handle Remove button for plant which match with the user */
  const [confirmDeleteModale, setConfirmDeleteModale] = useState(false);
  const handleRemove = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      plant_id: plantID,
    });
    /* Delete all the favorites */

    fetch(`${VITE_BACKEND_URL}/favorites-all`, {
      method: "DELETE",
      headers: myHeaders,
      body,
      redirect: "follow",
    })
      .then((response) => {
        console.warn(response);
      })
      .catch((error) => {
        console.warn(error);
        notifyPlantError();
      });

    /* Delete the plant by ID */
    fetch(`${VITE_BACKEND_URL}/plants/${plantID}`, {
      method: "DELETE",
      headers: myHeaders,
      body,
      redirect: "follow",
    })
      .then((response) => {
        if (response.ok) {
          setConfirmDeleteModale(false);
          getMyFavorites();
          getAllPlants();
          notifyDeleteSucess();
          setTimeout(() => {
            navigate(-1);
          }, 2000);
        }
      })
      .catch((error) => {
        console.warn(error);
        notifyPlantError();
      });
  };

  /* Check to display the remove button */
  const checkUser = currentUser.id === plant.user_id;

  return (
    <section className="h-[80vh]">
      <Toaster reverseOrder={false} position="top-center" />

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
            <img
              src={favorite ? fav : nofav}
              alt="Favorite button"
              className="w-6 h-6"
            />
          </button>
          <button
            type="button"
            onClick={() => setConfirmDeleteModale(!false)}
            className="px-2 my-3"
          >
            {checkUser === true ? (
              <img
                src={trash}
                alt="Remove button"
                className="w-5 h-5 hover:scale-105"
              />
            ) : (
              ""
            )}
          </button>

          {plant.content && (
            <div className=" flex flex-col mx-3 my-6 w-5/6 border-2 border-main-dark">
              <p className="h-fit p-3 text-left"> {plant?.content} </p>
            </div>
          )}
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
      <DeleteModalePlant
        setConfirmDeleteModale={setConfirmDeleteModale}
        confirmDeleteModale={confirmDeleteModale}
        handleRemove={handleRemove}
      />
    </section>
  );
}
