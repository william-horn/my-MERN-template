

import React from 'react';
import HeadshotFrame from './HeadshotFrame.styled';

const Headshot = ({ name, size, minSize, img, onClick, active, inactive }) => {

  // todo: work on changing data-attributes back to normal props for consistency
  return (
    <HeadshotFrame size={size} minSize={minSize} data-active={active} data-inactive={inactive}>
      <HeadshotFrame.Image src={img}/>
      <HeadshotFrame.ContentFrame onClick={onClick}>
        <HeadshotFrame.Text>{name}</HeadshotFrame.Text>
      </HeadshotFrame.ContentFrame>
    </HeadshotFrame>
  );
};

export default Headshot;

