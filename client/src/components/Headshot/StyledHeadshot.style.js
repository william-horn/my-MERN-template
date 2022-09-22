
import styled from 'styled-components';

export default styled.div`
  user-select: none;
  width: ${({size}) => size};
  height: ${({size}) => size};
  min-width: ${({minSize, size}) => minSize || size};
  min-height: ${({minSize, size}) => minSize || size};
  
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  /* padding: 5px; */
  box-shadow: 0 0 10px #ff5050;
  background-color: white;
  cursor: pointer;

  @keyframes headshotScaleBounce {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1.2);
    }
  } 

  @keyframes headshotRaise {
    0% {
      top: 0px;
    }

    100% {
      top: -10px;
    }
  }


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    /* background-color: white; */
    /* border: 5px solid black; */
    position: absolute;
    border-radius: inherit;
    padding: 6px;
    transition: all 0.25s
  }

  .headshot-content {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(250, 166, 74, 0.3);
    transition: all 0.25s
  }

  .headshot-content p {
    text-align: center;
    /* font-family: system-ui; */
    font-family: 'Bungee Spice', cursive;
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    width: 100%;
    opacity: 0;
    text-shadow: 0 0 10px black;
    transition: opacity 0.25s;
  }

  &:hover {
    box-shadow: 0 0 20px black;
  }

  &:hover .headshot-content,
  &[data-active=true] .headshot-content {
    background-color: rgba(0, 0, 0, 0);
    /* transform: scale(1.2); */
  }

  &:hover .headshot-content p,
  &[data-active=true] .headshot-content p {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.2);
  }

  &[data-active=true] {
    animation: headshotRaise 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    box-shadow: 0 10px 10px black;
  }

  &[data-active=true] img {
    animation: headshotScaleBounce 0.8s cubic-bezier(0.17, 0.44, 0, 1.77) forwards;
  }

`

