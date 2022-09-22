
import React from 'react';
import StyledPageContainer from './StyledPageContainer.style';

const PageLoader = ({ children, currentPage }) => {
  let pages;

  if (Array.isArray(children)) {
    pages = children;
  } else {
    pages = [children];
  }

  return (
    <StyledPageContainer>
      {pages.filter(page => page.props.name === currentPage)}
    </StyledPageContainer>
  );
};

export default PageLoader;

