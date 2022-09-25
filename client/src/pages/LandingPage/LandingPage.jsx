
import React, { useState } from 'react';
import { StateProvider } from '../../providers/StateProvider';
import Hero from './Hero';
import PageSelector from '../../components/PageSelector';
import Home from './Home';
import Profile from './Profile';
import Container from '../../components/styled/Container.styled';
import { useSharedStateContext } from '../../providers/SharedStateProvider';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('home'); // home | will | josh | ...members
  const [currentPageType, setCurrentPageType] = useState('system'); // system | profile

  
  useSharedStateContext()
    .set(LandingPage, {
      currentPage, 
      setCurrentPage, 
      currentPageType, 
      setCurrentPageType
    });

  return (
    <Container>
      <StateProvider 
        state={{
          currentPage, 
          setCurrentPage, 
          currentPageType, 
          setCurrentPageType
        }}>
        <Hero/>
        <Container 
          minHeight="100vh" 
          paddingTop="40px" 
        >
          <PageSelector>
            <Home name="home"/>
            <Profile name="will"/>
          </PageSelector>
        </Container>
      </StateProvider>
    </Container>
  )
}


export default LandingPage;



