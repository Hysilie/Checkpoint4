import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  /* We get the value in the localstorage
  then we convert it and send back at the defautl value */

  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

const useLocalStorage = (key, defaultValue) => {
  /* The value is the result of the getStorageValue function */
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  /* With useEffect, we get the value and set it or we set the default value */
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
