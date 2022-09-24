
import React, { useState, useRef } from 'react';
import StyledHomeThemeButtonPrimary from './StyledHomeThemeButtonPrimary.style';

const HomeThemeButtonPrimary = ({ children, icon, direction }) => {

  return (
    <StyledHomeThemeButtonPrimary>
      {direction === 'left' && <span className="material-symbols-outlined right-icon">{icon}</span>}
      <span>{children}</span>
      {icon && direction !=='left' && <span className="material-symbols-outlined left-icon">{icon}</span>}
    </StyledHomeThemeButtonPrimary>
  );
};

export default HomeThemeButtonPrimary;

