// Source - https://stackoverflow.com/a/74192696
// Posted by Victor Ejiogu
// Retrieved 2026-10-23, License - CC BY-SA 4.0
import { useEffect, useState } from 'react';

export const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = useState(fallbackState);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const getItemValue = JSON.parse(
        localStorage.getItem(storageKey) 
      );
      if (getItemValue) {
        setValue(getItemValue);
      }
    } catch (e) {
      setError(e);
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (e) {
      setError(e);
    }
  }, [fallbackState, storageKey, value]);

  return { value, setValue, error };
};
