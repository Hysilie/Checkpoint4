import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const { VITE_BACKEND_URL } = import.meta.env;

const CurrentPlantContext = createContext();

export default CurrentPlantContext;

export function CurrentPlantProvider({ children }) {
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    const getAllPlants = () => {
      fetch(`${VITE_BACKEND_URL}/plants`)
        .then((response) => response.json())
        .then((data) => {
          setAllPlants(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getAllPlants();
  }, [allPlants?.length]);

  return (
    <CurrentPlantContext.Provider
      /* eslint-disable react/jsx-no-constructed-context-values */
      value={{ allPlants, setAllPlants }}
    >
      {children}
    </CurrentPlantContext.Provider>
  );
}

CurrentPlantContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentPlantContext = () => useContext(CurrentPlantContext);
