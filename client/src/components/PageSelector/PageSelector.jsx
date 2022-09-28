
import React from 'react';
import { useComponentContext } from '../../providers/ContextProvider';

const PageSelector = ({ children, context }) => {
  const pages = Array.isArray(children) ? children : [children];
  const { currentPage } = useComponentContext(context);

  return (
    <>
      {pages.filter(page => page.props.name === currentPage)}
    </>
  );
};

export default PageSelector;

