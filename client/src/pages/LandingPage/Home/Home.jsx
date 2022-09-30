
import React, { useRef, useEffect, useState } from 'react';
import { images } from '../../../assets';
import { v4 as uuidv4 } from 'uuid';
import Carousel from '../../../components/Carousel';
import HomeThemeButtonPrimary from '../../../components/buttons/HomeThemeButtonPrimary';
import PageContent from '../../../components/styled/PageContent.styled';
import Container from '../../../components/styled/Container.styled';
import Attraction, { AttractionGroup } from '../../../components/styled/Attraction.styled';
import Header from '../../../components/styled/Header.styled';
import NormalText from '../../../components/styled/NormalText.styled';
import PrimaryText from '../../../components/styled/PrimaryText.styled';
import NormalLink from '../../../components/styled/NormalLink.styled';
import RowGroup from '../../../components/styled/RowGroup.styled';
import { useComponentContext } from '../../../providers/ContextProvider';
import Enum from '../../../enums';

/*
  todo: alternate attractions styles based on props and implement something like:

  <AttractionGroup alternate stagger>
    <Attraction>
      ...
    </Attraction>
    <Attraction>
      ...
    </Attraction>
  </AttractionGroup>
*/

const Home = (props) => {
  const { themeData } = useComponentContext(Enum.ContextSource.App);

  return (
    <PageContent paddingTop="40px">
      <Header>
        <Header.Title>Welcome to Jwsband</Header.Title>
        <Header.Subtext>"This is where the fun begins"</Header.Subtext>
      </Header>

      <Container>
        <AttractionGroup
          attractionWidth="60%"
          justifyContent="center"
          col_9="& > .attraction { width: 80%; }"
          col_6="& > .attraction { left: 0; width: calc(100% - 40px); }"
          col_5=".body { min-width: 400px; order: 0; } .text { text-align: center; }"
          col_3=".body { min-width: 200px; } & > .attraction { width: 100%; }"
        >
          <Attraction skewLeft>
            <Attraction.Head>
              <PrimaryText>Sometimes we make memes.</PrimaryText>
              <PrimaryText>They're pretty good.</PrimaryText>
              <NormalText>We also have a meme channel in our <NormalLink href="https://www.youtube.com">discord.</NormalLink></NormalText>
              <HomeThemeButtonPrimary icon="arrow_right">Check out our memes</HomeThemeButtonPrimary>
            </Attraction.Head>

            <Attraction.Body>
              <Carousel speed="90s" opacity="0.7" flowDirection="right"/>
            </Attraction.Body>
          </Attraction>

          <div style={{width: '100%', height: '50vh', backgroundColor: themeData.colorOne, padding: '20px'}}>
            <PrimaryText color="white">Buy our merch you cheap assholes</PrimaryText>
          </div>

          <Attraction swap skewRight>
            <Attraction.Head skew="right" align="left">
              <PrimaryText>We have a YouTube channel.</PrimaryText>
              <NormalText>This is where we post nonsense that makes us laugh. Enjoy.</NormalText>
              <HomeThemeButtonPrimary direction="left" icon="arrow_left">Check out our channel</HomeThemeButtonPrimary>
            </Attraction.Head>

            <Attraction.Body skew="right">
              <PrimaryText>Check out our videos:</PrimaryText>
              <Carousel speed="90s" opacity="0.7" imageTrack={images.backgrounds.VideoList1} flowDirection="left"/>
            </Attraction.Body>
          </Attraction>

          <Attraction skewLeft>
            <Attraction.Head>
              <PrimaryText>We have a YouTube channel.</PrimaryText>
              <NormalText>This is where we post nonsense that makes us laugh. Enjoy.</NormalText>
              <HomeThemeButtonPrimary icon="arrow_right">Check out our channel</HomeThemeButtonPrimary>
            </Attraction.Head>

            <Attraction.Body>
              <PrimaryText>Check out our videos:</PrimaryText>
              {/* <Carousel speed="90s" opacity="0.7" imageTrack={images.backgrounds.VideoList1} flowDirection="left"/> */}
            </Attraction.Body>
          </Attraction>

          <Attraction swap skewRight>
            <Attraction.Head skew="right">
              <PrimaryText>We have a YouTube channel.</PrimaryText>
              <NormalText>This is where we post nonsense that makes us laugh. Enjoy.</NormalText>
              <HomeThemeButtonPrimary direction="left" icon="arrow_left">Check out our channel</HomeThemeButtonPrimary>
            </Attraction.Head>

            <Attraction.Body skew="right">
              <PrimaryText>Check out our videos:</PrimaryText>
              <NormalText>You see, we have lots of great videos. We have millions of dollars to spend on quality production.</NormalText>
              {/* <Carousel speed="90s" opacity="0.7" imageTrack={images.backgrounds.VideoList1} flowDirection="left"/> */}
            </Attraction.Body>
          </Attraction>
        </AttractionGroup>
      </Container>
    </PageContent>
  );
};

export default Home;
