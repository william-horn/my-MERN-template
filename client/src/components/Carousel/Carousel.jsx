
import React, { useState, useRef } from 'react';
import StyledCarousel from './StyledCarousel.style';
import { v4 as uuidv4 } from 'uuid';
import { images } from '../../assets';
import { useAnimationFrame } from '../../hooks';
import { useEffect } from 'react';

const Carousel = () => {
  return (
    <StyledCarousel className="carousel-container">
      <div className="carousel-slide-track">
        <img src={images.memes.MemeBackground3} alt="" />
        <img src={images.memes.MemeBackground3} alt="" />
      </div>
    </StyledCarousel>
  );
};

export default Carousel;

