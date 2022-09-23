
import React, { useState, useRef } from 'react';
import StyledHomeThemeButtonPrimary from './StyledHomeThemeButtonPrimary.style';

const HomeThemeButtonPrimary = ({ children, icon }) => {

  return (
    <StyledHomeThemeButtonPrimary>
      <span>{children}</span>
      <span className="material-symbols-outlined">{icon}</span>
    </StyledHomeThemeButtonPrimary>
  );
};

export default HomeThemeButtonPrimary;

