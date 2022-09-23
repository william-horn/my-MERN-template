
import React, { useState } from 'react';
import { images } from '../../assets';
import { useStateContext, StateProvider } from '../../providers/StateProvider';
import StyledPage from './StyledPage.style';
import Header from './Header';
import Body from './Body';

const LandingPage = ({ }) => {

  const [currentPage, setCurrentPage] = useState('home'); // home | will | josh | ...members
  const [currentPageType, setCurrentPageType] = useState('system'); // system | profile

  return (
    <StyledPage>
      <StateProvider state={{currentPage, setCurrentPage, currentPageType, setCurrentPageType}}>
        <Header/>
        <Body/>
      </StateProvider>
    </StyledPage>
  )
}


export default LandingPage;



