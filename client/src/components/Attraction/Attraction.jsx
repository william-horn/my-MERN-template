
import React from 'react';
import StyledAttraction from './StyledAttraction.style';
import Carousel from '../Carousel';
import HomeThemeButtonPrimary from '../buttons/HomeThemeButtonPrimary';

const Left = ({ children, button }) => {
  return (
    <div className="attraction-left">
      {children}
      {button && <HomeThemeButtonPrimary icon="arrow_right">{button}</HomeThemeButtonPrimary>}
    </div>
  );
}

const Right = ({ children }) => {
  return (
    <div className="attraction-right">
      {children}
    </div>
  );
}

const Attraction = ({ children }) => {
  return (
    <StyledAttraction className="attraction">
      {children}
    </StyledAttraction>
  );
};

Attraction.Left = Left;
Attraction.Right = Right;

export default Attraction;


