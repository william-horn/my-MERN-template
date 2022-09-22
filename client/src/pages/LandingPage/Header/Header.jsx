
import React, { useRef } from 'react';
import Headshot from '../../../components/Headshot';
import StyledHeader from './StyledHeader.style';
import { images } from '../../../assets';
import { v4 as uuidv4 } from 'uuid';
import { useStateContext } from '../../../providers/StateProvider';
import BackgroundImage from '../../../components/BackgroundImage';

const Header = (props) => {
  const globalState = useStateContext();

  const groupMembers = [
    { name: 'Will', img: images.collection.WillHeadshot, page: 'will' },
    { name: 'Chris', img: images.collection.ChrisHeadshot, page: 'chris' },
    { name: 'Josh', img: images.collection.JoshHeadshot, page: 'josh' },
    { name: 'Marcos', img: images.collection.MarcosHeadshot, page: 'marcos' },
    { name: 'Trey', img: images.collection.TreyHeadshot, page: 'trey' },
  ];

  const changePage = (page, type) => {
    return () => {
      globalState.setCurrentPage(page);
      globalState.setCurrentPageType(type);
    }
  }

  return (
    <StyledHeader>
      <BackgroundImage img={images.backgrounds.SquadPic2} opacity="0.3"/>
      <div className="header-body">
        <div className="heading-container">
          <h1 onClick={changePage('home', 'system')}>Jwsband</h1>
        </div>
        <div className="header-content">
          <div className="members-container">
            {groupMembers.map(data => 
              <Headshot
                key={uuidv4()}
                size='125px' 
                name={data.name} 
                img={data.img}
                onClick={changePage(data.page, 'profile')}
                active={globalState.currentPage === data.page} // initial, true, false
              />
            )}
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header;


