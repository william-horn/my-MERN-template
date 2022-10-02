
import React, { useState, useRef } from 'react';
import StyledSecondaryButton from './StyledSecondaryButton.styled';

const SecondaryButton = ({ children, icon, direction='right', textPop }) => {

  return (
    <StyledSecondaryButton textPop={textPop} direction={direction}>
      {direction === 'left' && <span className="material-symbols-outlined right-icon">{icon}</span>}
      <span>{children}</span>
      {icon && direction !=='left' && <span className="material-symbols-outlined left-icon">{icon}</span>}
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;

