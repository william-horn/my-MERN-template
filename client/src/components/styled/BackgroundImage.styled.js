import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({backgroundColor='none'}) => backgroundColor};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: ${({opacity='1'}) => opacity};
`

const BackgroundImage = ({opacity, img, backgroundColor}) => {
  return (
    <ImageContainer backgroundColor={backgroundColor}>
      <Image opacity={opacity} src={img}/>
    </ImageContainer>
  );
}

ImageContainer.defaultProps = { className: 'background-image-container' };
Image.defaultProps = { className: 'background-image' };

export default BackgroundImage;