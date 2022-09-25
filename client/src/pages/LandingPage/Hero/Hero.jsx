
import React, { useRef } from 'react';
import Headshot from '../../../components/Headshot';
import { images } from '../../../assets';
import { v4 as uuidv4 } from 'uuid';
import { useStateContext } from '../../../providers/StateProvider';
import BackgroundImage from '../../../components/styled/BackgroundImage.styled';
import HeroBanner from './HeroBanner.styled';
import { useSharedStateContext } from '../../../providers/SharedStateProvider';
import LandingPage from '../LandingPage';

const Hero = () => {
  const globalState = useStateContext();
  const sharedState = useSharedStateContext(LandingPage);
  console.log('shared from hero: ', sharedState);

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
    <HeroBanner>
      <BackgroundImage img={images.backgrounds.SquadPic2} opacity="0.3"/>
      <HeroBanner.Head>
        <HeroBanner.Title onClick={changePage('home', 'system')}>Jwsband</HeroBanner.Title>
      </HeroBanner.Head>
      <HeroBanner.Body>
        <HeroBanner.Members>
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
        </HeroBanner.Members>
      </HeroBanner.Body>
    </HeroBanner>
  );
}

export default Hero;


