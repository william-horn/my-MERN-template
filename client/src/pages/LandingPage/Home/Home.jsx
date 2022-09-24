
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
          <NormalText>We also have a meme channel in our <NormalLink>discord.</NormalLink></NormalText>
          <HomeThemeButtonPrimary>Check out our memes</HomeThemeButtonPrimary>
        </Attraction.Head>

        <Attraction.Body>
          <PrimaryText>Hello world</PrimaryText>
          <Carousel speed="40s" opacity="0.7" startOnHover="true"/>
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
