
import React from 'react';
import StyledPageContainer from './StyledPageContainer.style';

const PageContainer = ({ children }) => {
  return (
    <StyledPageContainer className="page-container">
      {children}
    </StyledPageContainer>
  );
};

export default PageContainer;

