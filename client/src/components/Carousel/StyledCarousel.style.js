
import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 15px;

  /* Carousel track animation */
  @keyframes scroll { 
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

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

  /* Main carousel image container track */
  .carousel-slide-track {
    display: flex;
    position: absolute;
    height: 100%;
    opacity: ${({opacity}) => opacity || 1};
    /* animation: scroll ${({speed}) => speed || "10s"} linear infinite; */
  }

  .carousel-slide-track${({onHover}) => onHover === 'true' ? ':hover' : ''} {
    animation: scroll ${({speed}) => speed || "10s"} linear infinite;
  }

  /* Each carousel image */
  img {
    height: 100%;
    object-fit: cover;
  }
`;

