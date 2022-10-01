
import React, { useState, useRef } from 'react';
import StyledPrimaryButton from './StyledPrimaryButton.styled';

const PrimaryButton = ({ children, icon, direction='right', textPop }) => {

  return (
    <StyledPrimaryButton textPop={textPop} direction={direction}>
      {direction === 'left' && <span className="material-symbols-outlined right-icon">{icon}</span>}
      <span>{children}</span>
      {icon && direction !=='left' && <span className="material-symbols-outlined left-icon">{icon}</span>}
    </StyledPrimaryButton>
  );
};

export default PrimaryButton;

