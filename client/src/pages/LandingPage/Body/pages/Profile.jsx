
import React, { useRef, useEffect, useState } from 'react';
import { images } from '../../../../assets';
import BackgroundImage from '../../../../components/BackgroundImage';
import StyledProfile from './StyledProfile.style';
import { v4 as uuidv4 } from 'uuid';
import Carousel from '../../../../components/Carousel';

const Profile = (props) => {

  return (
    <StyledProfile>
      <header>
        <h2>Welcome to Jwsband</h2>
        <p>Jwsband is a group of lifelong friends that just do weird shit sometimes but it's cool.</p>
      </header>

      <div className="page-content">
        <div className="info-section">
          <div className="left">
            <p>Sometimes we make memes. They're pretty good. More text more text more text and more text.</p>
            <button>Check out our memes<span className="material-symbols-outlined">arrow_forward</span></button>
          </div>
          <div className="right">
            <Carousel/>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;