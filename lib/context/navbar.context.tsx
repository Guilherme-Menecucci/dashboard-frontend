import React, { createContext, useCallback, useContext } from 'react';
import { TDefaultContextData } from '~@types/lib/context/index.context';

import { TNavbarContextData } from '~@types/lib/context/navbar.context';

const NavbarContext = createContext({} as TNavbarContextData);

const NAV_CLASS_OPENED = 'nav-open';

const NavbarProvider = ({ children }: TDefaultContextData) => {
  const toggleNavClass = useCallback(() => {
    const element = document.documentElement;

    element.classList.toggle(NAV_CLASS_OPENED);
  }, []);

  return <NavbarContext.Provider value={{ toggleNavClass }}>{children}</NavbarContext.Provider>;
};

function useNavbar() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }

  return context;
}

export { NavbarProvider, useNavbar };
