

import React from 'react';
import StyledHeadshot from './StyledHeadshot.style';

const Headshot = ({ name, size, minSize, img, onClick, active, inactive }) => {
  return (
    <StyledHeadshot 
      size={size} 
      minSize={minSize} 
      data-active={active} 
      data-inactive={inactive}
    >
      <img src={img} alt="" />
      <div className='headshot-content' onClick={onClick}>
        <p>{name}</p>
      </div>
    </StyledHeadshot>
  );
};

export default Headshot;

