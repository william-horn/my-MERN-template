
import React, { useRef, useEffect, useState } from 'react';
import { images } from '../../assets'
import { useComponentContext } from '../../providers/ContextProvider';
import Container from '../../components/styled/Container.styled';
import RowGroup from '../../components/styled/RowGroup.styled';
import PrimaryText from '../../components/styled/PrimaryText.styled';
import BackgroundImage from '../../components/styled/BackgroundImage.styled';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import NormalText from '../../components/styled/NormalText.styled';
import Header from '../../components/styled/Header.styled';
import Enum from '../../enums';

const LandingPage = () => {
  const { themeData } = useComponentContext(Enum.ContextSource.App);

  return (
    <Container backgroundColor="black" minHeight="100vh">
      <BackgroundImage img={images.backgrounds.Galaxy} opacity="0.2"/>
      <BackgroundImage img={images.backgrounds.Nick1} opacity="0.6"/>
      <Header>
        <Header.Subtext>lets go</Header.Subtext>
        <RowGroup padding="10px" justifyContent="space-between">
          <Container fill="false">
            <NormalText marginBottom="0">Gemdroppers</NormalText>
          </Container>
          <RowGroup>
            <PrimaryButton direction="left">Login</PrimaryButton>
            <SecondaryButton>Signup</SecondaryButton>
          </RowGroup>
        </RowGroup>
      </Header>
    </Container>
  )
};


export default LandingPage;



