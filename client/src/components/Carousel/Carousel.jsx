
import React from 'react';
import StyledCarousel from './StyledCarousel.style';
import { images } from '../../assets';

const Carousel = (props) => {
  return (
    <StyledCarousel 
      className="carousel-container" {...props}>
      <div className="carousel-slide-track">
        <img src={images.memes.MemeBackground3} alt="" />
        <img src={images.memes.MemeBackground3} alt="" />
      </div>
    </StyledCarousel>
  );
};

export default Carousel;

