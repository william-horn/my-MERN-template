
import React, { useRef, useEffect, useState } from 'react';
import { images } from '../../../assets';
import BackgroundImage from '../../../components/BackgroundImage';
import { v4 as uuidv4 } from 'uuid';
import Carousel from '../../../components/Carousel';
import HomeThemeButtonPrimary from '../../../components/buttons/HomeThemeButtonPrimary';
import PageContent from '../../../components/styles/PageContent.style';
import PageContainer from '../../../components/styles/PageContainer.style';
import Attraction from '../../../components/Attraction';
import Header from '../../../components/Header';
import NormalText from '../../../components/styles/NormalText.style';
import PrimaryText from '../../../components/styles/PrimaryText.style';
import NormalLink from '../../../components/styles/NormalLink.style';

const Home = (props) => {

  return (
    <PageContent>
      <Header 
        title="Welcome to Jwsband"
        subTitle={"\"This is where the fun begins\""}
      />

      <Attraction>
        <Attraction.Left>
          <PrimaryText>Sometimes we make memes.</PrimaryText>
          <PrimaryText>They're pretty good.</PrimaryText>
          <NormalText>We also have a meme channel in our <NormalLink>discord.</NormalLink></NormalText>
          <HomeThemeButtonPrimary icon="arrow_right" direction="right">Check out our memes</HomeThemeButtonPrimary>
        </Attraction.Left>

        <Attraction.Right>
          <Carousel speed="20s" opacity="0.7"/>
        </Attraction.Right>
      </Attraction>

      <Attraction>
        <Attraction.Right>
          <p>Some of our memes:</p>
          <Carousel speed="20s" opacity="0.7"/>
        </Attraction.Right>

        <Attraction.Left>
          <NormalText>Sometimes we make memes. They're pretty good. More text more text more text and more text.</NormalText>
          <HomeThemeButtonPrimary icon="arrow_left" direction="left">Check out our memes</HomeThemeButtonPrimary>
        </Attraction.Left>
      </Attraction>
    </PageContent>
  );
};

export default Home;
