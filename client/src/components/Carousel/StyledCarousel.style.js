
import styled from 'styled-components';
import { images } from '../../assets';

export default styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 15px;

  @keyframes scroll { 
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

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

  .carousel-slide-track {
    /* width: 100%; */
    display: flex;
    /* align-items: flex-start; */
    /* justify-content: center; */
    position: absolute;
    /* overflow: hidden; */
    height: 100%;
    animation: scroll 10s linear infinite;
    /* background-repeat: repeat-x; */
    /* background-size: cover; */
    /* width: 1749px; */
    /* width: 2614px; */
    /* min-width: 200px;
    min-height: 100px; */
  }

  img {
    height: 100%;
    object-fit: cover;
  }
`;

