
import React, { useState } from 'react';
import { StateProvider } from '../../providers/StateProvider';
import Hero from './Hero';
import PageSelector from '../../components/PageSelector';
import Home from './Home';
import Profile from './Profile';
import Container from '../../components/styled/Container.styled';

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('home'); // home | will | josh | ...members
  const [currentPageType, setCurrentPageType] = useState('system'); // system | profile

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
        <Container minHeight="100vh" padding="40px 20px 20px 20px">
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



