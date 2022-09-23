
import React, { useState, useRef } from 'react';
import StyledCarousel from './StyledCarousel.style';
import { v4 as uuidv4 } from 'uuid';
import { images } from '../../assets';
import { useAnimationFrame } from '../../hooks';
import { useEffect } from 'react';

const Carousel = () => {
  const [counter, setCounter] = useState(0);

  const carouselImages = useRef([
    images.memes.ChrisJobMeme,
    images.memes.JoshBuyingMovies,
    images.memes.JoshCovidBonk,
    images.memes.WillPhoneMeme,
    images.memes.JoshDepressed
  ]);

  const carouselRate = 2;

  useAnimationFrame((dt) => {
    setCounter(prev => prev + dt*carouselRate);
  });

  useEffect(() => {
    if (counter >= 150) {
      const carouselArray = carouselImages.current;
      carouselArray.push(carouselArray.shift());
      setCounter(0);
    }
  });

  return (
    <div style={{width: "100%", height: "100%", overflow: "hidden", position: "relative", borderRadius: "15px"}}>
      <StyledCarousel offsetX={~~counter}>
        {carouselImages.current.map(image => {
          return <img key={uuidv4()} src={image}/>
        })}
      </StyledCarousel>
    </div>
  );
};

export default Carousel;

