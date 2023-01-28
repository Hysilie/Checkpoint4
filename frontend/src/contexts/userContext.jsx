import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserContext = createContext();

export default CurrentUserContext;

/* We save the users informations with his token in the localstoage */
export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");

  return (
    <CurrentUserContext.Provider
      /* eslint-disable react/jsx-no-constructed-context-values */
      value={{ token, setToken, currentUser, setCurrentUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentUserContext = () => useContext(CurrentUserContext);
