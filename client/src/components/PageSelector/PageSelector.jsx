
import React from 'react';
import StyledPageSelector from './StyledPageSelector.style';
import { useStateContext } from '../../providers/StateProvider';

const PageSelector = ({ children }) => {
  let pages;
  const globalState = useStateContext();

  if (Array.isArray(children)) {
    pages = children;
  } else {
    pages = [children];
  }

  return (
    <StyledPageSelector>
      {pages.filter(page => page.props.name === globalState.currentPage)}
    </StyledPageSelector>
  );
};

export default PageSelector;

