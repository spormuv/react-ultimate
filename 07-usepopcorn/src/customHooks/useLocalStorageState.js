import { useEffect, useState } from 'react';

export function useLocalStorageState(key) {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key) || '[]')
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
