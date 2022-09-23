
import React from 'react';
import StyledPageSelector from './StyledPageSelector.style';

const PageSelector = ({ children, currentPage }) => {
  let pages;

  if (Array.isArray(children)) {
    pages = children;
  } else {
    pages = [children];
  }

  return (
    <StyledPageSelector>
      {pages.filter(page => page.props.name === currentPage)}
    </StyledPageSelector>
  );
};

export default PageSelector;

