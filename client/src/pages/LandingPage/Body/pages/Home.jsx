
import React from 'react';
import { images } from '../../../../assets';
import BackgroundImage from '../../../../components/BackgroundImage';
import StyledHome from './StyledHome.style';

const Home = (props) => {
  return (
    <StyledHome>
      <header>
        <h2>Welcome to Jwsband</h2>
        <p>Jwsband is a group of lifelong friends that just do weird shit sometimes but it's cool.</p>
      </header>

      <div className="page-content">
        <div className="info-section">
          <div className="left">
            {/* <p>Sometimes we make memes. They're pretty good. More text more text more text and more text.</p> */}
            {/* <button>Check out our memes<span className="material-symbols-outlined">arrow_forward</span></button> */}
          </div>
          <div className="right">
            <p>this is something</p>
          </div>
        </div>
      </div>
    </StyledHome>
  );
};

export default Home;
