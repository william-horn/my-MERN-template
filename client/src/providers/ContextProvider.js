
import React, { createContext, useContext } from 'react';

const contextStore = new Map();

const getContext = source => {
  let context = contextStore.get(source);

  if (!context) {
    context = createContext();
    contextStore.set(source, context);
  }

  return context;
}

export const useComponentContext = source => {
  return useContext(contextStore.get(source));
}

export const ContextProvider = ({ children, value, source }) => {
  const ProviderInstance = getContext(source);

  return (
    <ProviderInstance.Provider value={value}>
      {children}
    </ProviderInstance.Provider>
  )
}

