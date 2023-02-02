import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PreviousBtn from "@components/PreviousBtn";
import { useCurrentPlantContext } from "../../contexts/plantContext";

const { VITE_BACKEND_URL } = import.meta.env;

function PlantsPages() {
  const { allPlants, getAllPlants } = useCurrentPlantContext();

  useEffect(() => {
    getAllPlants();
  }, []);

  return (
    <section className="h-[80vh]">
      <PreviousBtn />
      <h2 className="text-center my-6 text-xl">ARTICLES</h2>
      {/*       <ul className="flex flex-col md:flex-wrap lg:justify-evenly lg:flex-row mt-6 items-center gap-6">
       */}{" "}
      <div className=" flex ">
        <ul className="mx-auto p-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {allPlants?.length === 0 && (
            <div className="flex justify-center items-center">
              <p className="text-2xl text-center">Loading...</p>
            </div>
          )}
          {allPlants?.map((plant) => (
            <li
              key={plant.id}
              className="border-[1px] lg:m-6 border-main-dark   h-fit w-60 hover:scale-105 duration-300 hover:contrast-50"
            >
              <Link to={`/plants/${plant.id}`}>
                <img
                  src={`${VITE_BACKEND_URL}/pictures/${plant.picture}`}
                  alt={plant.title}
                  className="h-48 w-60 object-cover"
                />{" "}
                <h3 className="px-2 font-semibold text-md   w-100 lg:w-72 flex  pr-8">
                  {plant.title?.toUpperCase().slice(0, 25).replace(/.$/, "...")}
                </h3>
                <p className="px-2">
                  by {plant.username}, the{"  "}
                  {plant.creationDate
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PlantsPages;
