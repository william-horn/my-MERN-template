
import React, { createContext, useContext } from 'react';

const SharedStateContext = createContext();

export const useSharedStateContext = (comp) => {
  const context = useContext(SharedStateContext);
  return comp ? context.get(comp) : context;
}

// store states inside store object (make it a map?), use the components as keys.
export const SharedStateProvider = ({ children }) => {
  const store = new Map();

  return (
    <SharedStateContext.Provider value={store}>
      {children}
    </SharedStateContext.Provider>
  )
}

