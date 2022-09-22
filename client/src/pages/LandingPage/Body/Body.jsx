

import React from 'react';
import StyledBody from './StyledBody.style';
import { useStateContext } from '../../../providers/StateProvider';
import PageContainer from './PageContainer';
import HomePage from './pages/Home';
import BackgroundImage from '../../../components/BackgroundImage';
import { images } from '../../../assets';

const Body = () => {
  const globalState = useStateContext();
  
  return (
    <StyledBody>
      <PageContainer currentPage={globalState.currentPage}>
        <HomePage name="home"/>
        <HomePage/>
      </PageContainer>
    </StyledBody>
  );
};

export default Body;

