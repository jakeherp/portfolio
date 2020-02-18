import React, { createContext, useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

const defaults = {
  darkMode: false,
  changeMode: () => {},
};

const DarkModeContext = createContext<any>(defaults);

export const Provider = ({ children }: IProps) => {
  const [darkMode, toggleDarkMode] = useState<boolean>(defaults.darkMode);

  const changeMode = (currentMode: boolean) => {
    try {
      toggleDarkMode(!currentMode);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DarkModeContext.Provider
      value={{
        ...defaults,
        darkMode,
        changeMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
