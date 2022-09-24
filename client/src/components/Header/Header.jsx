

import React from 'react';
import StyledHeader from './StyledHeader.style';
import PrimaryText from '../styles/PrimaryText.style';

const Header = ({ children, title, subTitle }) => {
  return (
    <StyledHeader>
      <h2>{title}</h2>
      <PrimaryText>{subTitle}</PrimaryText>
      {children}
    </StyledHeader>
  );
};

export default Header;

