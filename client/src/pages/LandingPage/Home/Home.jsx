
import React, { useRef, useEffect, useState } from 'react';
import { images } from '../../../assets';
import { v4 as uuidv4 } from 'uuid';
import Carousel from '../../../components/Carousel';
import HomeThemeButtonPrimary from '../../../components/buttons/HomeThemeButtonPrimary';
import PageContent from '../../../components/styled/PageContent.styled';
import Container from '../../../components/styled/Container.styled';
import Attraction from '../../../components/styled/Attraction.styled';
import Header from '../../../components/styled/Header.styled';
import NormalText from '../../../components/styled/NormalText.styled';
import PrimaryText from '../../../components/styled/PrimaryText.styled';
import NormalLink from '../../../components/styled/NormalLink.styled';
import GroupRow from '../../../components/styled/GroupRow.styled';

/*
  todo: alternate attractions styles based on props and implement something like:

  <AttractionGroup alternate="true" stagger="true">
    <Attraction>
      ...
    </Attraction>
    <Attraction>
      ...
    </Attraction>
  </AttractionGroup>
*/

const Home = (props) => {

  return (
    <PageContent>
      <Header>
        <Header.Title>Welcome to Jwsband</Header.Title>
        <Header.Subtext>"This is where the fun begins"</Header.Subtext>
      </Header>

      <Attraction>
        <Attraction.Head>
          <PrimaryText>Sometimes we make memes.</PrimaryText>
          <PrimaryText>They're pretty good.</PrimaryText>
          <NormalText>We also have a meme channel in our <NormalLink href="https://www.youtube.com">discord.</NormalLink></NormalText>
          <HomeThemeButtonPrimary icon="arrow_right">Check out our memes</HomeThemeButtonPrimary>
        </Attraction.Head>

        <Attraction.Body>
          <Carousel speed="40s" opacity="0.7" flowDirection="right"/>
        </Attraction.Body>
      </Attraction>

      <Attraction>
        <Attraction.Body>
          <PrimaryText>Check out our videos:</PrimaryText>
          <Carousel speed="40s" opacity="0.7" imageTrack={images.backgrounds.VideoList1} flowDirection="left"/>
        </Attraction.Body>

        <Attraction.Head>
          <PrimaryText>We have a YouTube channel.</PrimaryText>
          <NormalText>This is where we post nonsense that makes us laugh. Enjoy.</NormalText>
          <HomeThemeButtonPrimary direction="left" icon="arrow_left">Check out our channel</HomeThemeButtonPrimary>
        </Attraction.Head>
      </Attraction>
    </PageContent>
  );
};

export default Home;
