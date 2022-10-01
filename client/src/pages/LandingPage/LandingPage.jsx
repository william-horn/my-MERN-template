
import React, { useRef, useEffect, useState } from 'react';
import { useComponentContext } from '../../providers/ContextProvider';
import Container from '../../components/styled/Container.styled';
import RowGroup from '../../components/styled/RowGroup.styled';
import PrimaryText from '../../components/styled/PrimaryText.styled';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import NormalText from '../../components/styled/NormalText.styled';
import Header from '../../components/styled/Header.styled';
import Enum from '../../enums';

const LandingPage = () => {
  const { themeData } = useComponentContext(Enum.ContextSource.App);

  return (
    <Container backgroundColor="black" minHeight="100vh">
      <Header>
        <NormalText>Something cool</NormalText>
        <PrimaryButton>Something else</PrimaryButton>
      </Header>
    </Container>
  )
};


export default LandingPage;



