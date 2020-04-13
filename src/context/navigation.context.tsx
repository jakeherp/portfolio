import React, { createContext } from 'react';
import useToggle from 'Hooks/useToggle';

interface IProps {
  children: React.ReactNode;
}

const defaults = {
  isOpen: false,
};

const NavContext = createContext<any>(defaults);

export const Provider = ({ children }: IProps) => {
  const isOpen = useToggle(false);

  return (
    <NavContext.Provider
      value={{
        isOpen,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
