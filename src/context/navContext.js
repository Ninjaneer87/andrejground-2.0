import React, { useCallback } from 'react';
import { createContext, useState } from "react";

const NavContext = createContext({
  isExpanded: false,
  toggleExpanded: () => {},
  setExpanded: exp => {},
});

export const menuItems = [
  {
    id: 1,
    text: 'HOME',
    path: '/',
  },
  {
    id: 2,
    text: 'PORTFOLIO',
    path: '/portfolio',
  },
  {
    id: 3,
    text: 'ABOUT',
    path: '/about',
  },
  {
    id: 4,
    text: 'CONTACT',
    path: '/contact',
  }
];

export const NavContextProvider = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpandedHandler = useCallback(() => {
    setExpanded(prevExpanded => !prevExpanded)
  }, [])
  const setExpandedHandler = useCallback(exp => {
    setExpanded(exp)
  }, [])

  const context = {
    isExpanded: expanded,
    toggleExpanded: toggleExpandedHandler,
    setExpanded: setExpandedHandler,
  };

  return <NavContext.Provider value={context}>
    {props.children}
  </NavContext.Provider>
}

export default NavContext;