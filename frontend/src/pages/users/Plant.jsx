import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PreviousBtn from "@components/PreviousBtn";

const { VITE_BACKEND_URL } = import.meta.env;

export default function Plant() {
  const { id } = useParams();

  const [plant, setPlant] = useState([]);

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
