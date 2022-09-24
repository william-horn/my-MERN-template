
import React from 'react';
import styled from 'styled-components';

const CarouselFrame = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 15px;

  /* Left/Right shadows */
  &::after,
  &::before {
    content: '';
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 3;
    left: -10px;
    background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  }

  &::after {
    left: initial;
    right: -10px;
    transform: rotateZ(180deg);
  }

  &[data-start-on-hover=true]:not(:hover) .slider {
    animation-play-state: paused;
  }
`;

const Slider = styled.div`
  @keyframes left { 
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes right { 
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  display: flex;
  position: absolute;
  height: 100%;
  opacity: ${({opacity}) => opacity};

  ${({flowDirection, speed}) => `
    animation: ${flowDirection} ${speed} linear infinite;
  `}

  img {
    height: 100%;
    object-fit: cover;
  }
`;

Slider.defaultProps = { className: 'carousel-frame slider' };
CarouselFrame.defaultProps = { className: 'carousel-frame' };

CarouselFrame.Slider = Slider;

export default CarouselFrame;