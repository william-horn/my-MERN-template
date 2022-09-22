

import React from 'react';
import StyledBody from './StyledBody.style';
import { useStateContext } from '../../../providers/StateProvider';
import PageLoader from './PageLoader';
import HomePage from './pages/Home';

const Body = () => {
  const globalState = useStateContext();
  
  return (
    <StyledBody>
      <PageLoader currentPage={globalState.currentPage}>
        <HomePage name="chris"/>
        <HomePage/>
      </PageLoader>
    </StyledBody>
  );
};

export default Body;

