
import React, { useState, useEffect } from 'react';

export const useSavedState = (key, initialValue) => {
  let prev = JSON.parse(localStorage.getItem(key)) || initialValue;
  const [state, setState] = useState(prev);

  useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
  }, [state])

  return [state, setState];
}

