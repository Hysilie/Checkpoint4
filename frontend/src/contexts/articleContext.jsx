import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const { VITE_BACKEND_URL } = import.meta.env;

const CurrentArticleContext = createContext();

export default CurrentArticleContext;

/* We save the users informations with his token in the localstoage */
export function CurrentArticleProvider({ children }) {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    const getAllArticles = () => {
      fetch(`${VITE_BACKEND_URL}/articles`)
        .then((response) => response.json())
        .then((data) => {
          setAllArticles(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    getAllArticles();
  }, [allArticles?.length]);

  return (
    <CurrentArticleContext.Provider
      /* eslint-disable react/jsx-no-constructed-context-values */
      value={{ allArticles, setAllArticles }}
    >
      {children}
    </CurrentArticleContext.Provider>
  );
}

CurrentArticleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentArticleContext = () => useContext(CurrentArticleContext);
