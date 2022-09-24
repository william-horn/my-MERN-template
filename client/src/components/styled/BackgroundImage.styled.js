import React from 'react';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({backgroundColor='none'}) => backgroundColor};
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: ${({opacity='1'}) => opacity};
`

const BackgroundImage = ({opacity, img, backgroundColor}) => {
  return (
    <StyledImageContainer className="background-image container" backgroundColor={backgroundColor}>
      <StyledImage className="background-image image" opacity={opacity} src={img}/>
    </StyledImageContainer>
  );
}

export default BackgroundImage;