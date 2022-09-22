
import React from 'react';

const PageLoader = ({ children, currentPage }) => {
  let pages;

  if (Array.isArray(children)) {
    pages = children;
  } else {
    pages = [children];
  }

  console.log('from pageloader: ', children, children.map, currentPage);
  return (
    <>
      {pages.filter(page => page.props.name === currentPage)}
    </>
  );
};

export default PageLoader;

