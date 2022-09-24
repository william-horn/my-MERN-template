
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
import GroupRow from '../../../components/styles/GroupRow.style';

const Home = (props) => {

  return (
    <PageContent>
      <Header 
        title="Welcome to Jwsband"
        subTitle={"\"This is where the fun begins\""}
      />

      <Attraction>
        <Attraction.Head>
          <PrimaryText>Sometimes we make memes.</PrimaryText>
          <PrimaryText>They're pretty good.</PrimaryText>
          <NormalText>We also have a meme channel in our <NormalLink>discord.</NormalLink></NormalText>
          <HomeThemeButtonPrimary>Check out our memes</HomeThemeButtonPrimary>
        </Attraction.Head>

        <Attraction.Body>
          <PrimaryText>Hello world</PrimaryText>
          <Carousel speed="20s" opacity="0.7" onHover="true"/>
        </Attraction.Body>
      </Attraction>

      <Attraction>
        <Attraction.Head>
          <PrimaryText>Try it out!</PrimaryText>
          <NormalText>Sometimes we make memes. They're pretty good. More text more text more text and more text.</NormalText>
          <GroupRow gap="10px" justifyContent="flex-start">
            <HomeThemeButtonPrimary>Yes</HomeThemeButtonPrimary>
            <HomeThemeButtonPrimary>Maybe later</HomeThemeButtonPrimary>
          </GroupRow>
        </Attraction.Head>

        <Attraction.Body>
          <PrimaryText>Some of our memes:</PrimaryText>
        </Attraction.Body>
      </Attraction>
    </PageContent>
  );
};

export default Home;
