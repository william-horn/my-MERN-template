
import React, { useRef, useEffect, useState } from 'react';
import { images } from '../../../assets';
import BackgroundImage from '../../../components/BackgroundImage';
import StyledHome from './StyledHome.style';
import { v4 as uuidv4 } from 'uuid';
import Carousel from '../../../components/Carousel';
import HomeThemeButtonPrimary from '../../../components/buttons/HomeThemeButtonPrimary';
import PageContainer from '../../../components/PageContainer';
import Attraction from '../../../components/Attraction';

const Home = (props) => {

  return (
    <StyledHome>
      <PageContainer>
        <header>
          <h2>Welcome to Jwsband</h2>
          <p>Jwsband is a group of lifelong friends that just do weird shit sometimes but it's cool.</p>
        </header>

        <div className="page-content">
          <Attraction>
            <Attraction.Left 
              button="Check out our memes" 
              buttonIcon="arrow_right"
            >
              <p>Sometimes we make memes. They're pretty good. More text more text more text and more text.</p>
            </Attraction.Left>

            <Attraction.Right>
              <Carousel/>
            </Attraction.Right>
          </Attraction>
        </div>
      </PageContainer>
    </StyledHome>
  );
};

export default Home;
