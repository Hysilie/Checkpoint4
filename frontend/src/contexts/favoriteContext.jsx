import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useCurrentUserContext } from "./userContext";

const { VITE_BACKEND_URL } = import.meta.env;

const CurrentFavoriteContext = createContext();

export default CurrentFavoriteContext;

export function CurrentFavoriteProvider({ children }) {
  const { currentUser, token } = useCurrentUserContext();
  const [myFavorites, setMyFavorites] = useState([]);

  const getMyFavorites = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    fetch(`${VITE_BACKEND_URL}/favorites/${currentUser.id}`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((data) => {
        setMyFavorites(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getMyFavorites();
  }, [myFavorites?.length]);

  return (
    <CurrentFavoriteContext.Provider
      /* eslint-disable react/jsx-no-constructed-context-values */
      value={{ myFavorites, setMyFavorites, getMyFavorites }}
    >
      {children}
    </CurrentFavoriteContext.Provider>
  );
}

CurrentFavoriteContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentFavoriteContext = () =>
  useContext(CurrentFavoriteContext);
