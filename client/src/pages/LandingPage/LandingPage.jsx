
import React, { useState } from 'react';
import { ContextProvider } from '../../providers/ContextProvider';
import Hero from './Hero';
import PageSelector from '../../components/PageSelector';
import Home from './Home';
import Container from '../../components/styled/Container.styled';
import Enum from '../../enums';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('home'); // home | will | josh | ...members
  const [currentPageType, setCurrentPageType] = useState('system'); // system | profile

  return (
    <ContextProvider 
      source={Enum.ContextSource.LandingPage}
      value={{currentPage, setCurrentPage, currentPageType, setCurrentPageType}}
    >
      <Container>
        <Hero/>
        <Container 
          minHeight="100vh" 
          paddingTop="40px" 
        >
          <PageSelector context={Enum.ContextSource.LandingPage}>
            <Home name="home"/>
          </PageSelector>
        </Container>
      </Container>
    </ContextProvider>
  )
};


export default LandingPage;



