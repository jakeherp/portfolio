import { useState, useEffect } from 'react';
import storage from 'local-storage-fallback';

export default function useTheme(defaultTheme = { mode: 'dark' }) {
  const [colourTheme, setColourTheme] = useState(getInitialTheme);

  function getInitialTheme() {
    const savedTheme = storage.getItem('colourTheme');
    return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
  }

  useEffect(() => {
    storage.setItem('colourTheme', JSON.stringify(colourTheme));
  }, [colourTheme]);

  return {
    ...colourTheme,
    setTheme: ({ setTheme, ...colourTheme }: any) =>
      setColourTheme(colourTheme),
  };
}
