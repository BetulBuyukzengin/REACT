import { useState, useEffect } from "react";
export function useLocaleStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    console.log(storedValue);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
