

import React from 'react';
import StyledBody from './StyledBody.style';
import { useStateContext } from '../../../providers/StateProvider';
import PageSelector from './PageSelector';
import HomePage from './pages/Home';
import Profile from './pages/Profile';
import BackgroundImage from '../../../components/BackgroundImage';
import { images } from '../../../assets';

const Body = () => {
  const globalState = useStateContext();
  
  return (
    <StyledBody>
      <PageSelector currentPage={globalState.currentPage}>
        <HomePage name="home"/>
        <Profile name="will"/>
      </PageSelector>
    </StyledBody>
  );
};

export default Body;

