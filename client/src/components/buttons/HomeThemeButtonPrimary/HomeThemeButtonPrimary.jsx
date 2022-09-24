
import React, { useState, useRef } from 'react';
import StyledHomeThemeButtonPrimary from './StyledHomeThemeButtonPrimary.styled';

const HomeThemeButtonPrimary = ({ children, icon, direction, textPop }) => {

  return (
    <StyledHomeThemeButtonPrimary textPop={textPop} direction={direction}>
      {direction === 'left' && <span className="material-symbols-outlined right-icon">{icon}</span>}
      <span>{children}</span>
      {icon && direction !=='left' && <span className="material-symbols-outlined left-icon">{icon}</span>}
    </StyledHomeThemeButtonPrimary>
  );
};

export default HomeThemeButtonPrimary;

