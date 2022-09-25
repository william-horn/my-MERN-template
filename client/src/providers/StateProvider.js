
import React, { createContext, useContext } from 'react';

// todo: see if we can generalize this provider to re-use it at higher levels
const StateContext = createContext();
export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children, state }) => {
  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}


