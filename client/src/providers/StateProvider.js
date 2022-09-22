
import React, { createContext, useContext } from 'react';

const StateContext = createContext();
export const useStateContext = () => useContext(StateContext);

export const StateProvider = ({ children, state }) => {
  console.log('provider got: ', state);

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}


