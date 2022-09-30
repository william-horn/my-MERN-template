
import React, { createContext, useContext } from 'react';

const ContextSource = new Map();

const getContext = source => {
  let context = ContextSource.get(source);

  if (!context) {
    context = createContext();
    ContextSource.set(source, context);
  }

  return context;
}

export const useComponentContext = source => {
  return useContext(ContextSource.get(source));
}

export const ContextProvider = ({ children, value, source }) => {
  const ProviderInstance = getContext(source);

  return (
    <ProviderInstance.Provider value={value}>
      {children}
    </ProviderInstance.Provider>
  )
}

