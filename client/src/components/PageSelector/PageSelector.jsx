
import React from 'react';
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
    <>
      {pages.filter(page => page.props.name === globalState.currentPage)}
    </>
  );
};

export default PageSelector;

