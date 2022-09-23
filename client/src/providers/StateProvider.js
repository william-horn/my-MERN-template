
import React, { createContext, useContext } from 'react';

const StateContext = createContext();
export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children, state }) => {
  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}


