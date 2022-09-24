
import React from 'react';
import CarouselFrame from './CarouselFrame.styled';
import { images } from '../../assets';

/*
  todo: add stuff like:

  <Carousel title="my carousel">
    <Carousel.Track>
      ...
    </Carousel.Track>
  </Carousel>

  add props:
    - pauseOnHover
    - speedOnHover?

  current props:
    - startOnHover
    - speed
    - flowDirection
    - opacity
  
*/

const Carousel = (props) => {
  const {
    imageTrack=images.memes.MemeBackground3,
    speed='10s',
    startOnHover='false',
    flowDirection='left',
    opacity='1'
  } = props;

  // todo: change data-start-on-hover to 'startOnHover' with styled component props for consistency
  return (
    <CarouselFrame data-start-on-hover={startOnHover}>
      <CarouselFrame.Slider speed={speed} flowDirection={flowDirection} opacity={opacity}>
        <img src={imageTrack} alt="" />
        <img src={imageTrack} alt="" />
      </CarouselFrame.Slider>
    </CarouselFrame>
  );
};

export default Carousel;

