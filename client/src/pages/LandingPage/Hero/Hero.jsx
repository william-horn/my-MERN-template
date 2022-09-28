
import React, { useRef, useEffect } from 'react';
import Headshot from '../../../components/Headshot';
import { images } from '../../../assets';
import { v4 as uuidv4 } from 'uuid';
import BackgroundImage from '../../../components/styled/BackgroundImage.styled';
import HeroBanner from './HeroBanner.styled';
import { useComponentContext } from '../../../providers/ContextProvider';
import Enum from '../../../enums';

const Hero = () => {
  const { 
    currentPage, 
    setCurrentPage,
    setCurrentPageType
  } = useComponentContext(Enum.ContextStore.LandingPage);

  const groupMembers = [
    { name: 'Will', img: images.collection.WillHeadshot, page: 'will' },
    { name: 'Chris', img: images.collection.ChrisHeadshot, page: 'chris' },
    { name: 'Josh', img: images.collection.JoshHeadshot, page: 'josh' },
    { name: 'Marcos', img: images.collection.MarcosHeadshot, page: 'marcos' },
    { name: 'Trey', img: images.collection.TreyHeadshot, page: 'trey' },
  ];

  const changePage = (page, type) => {
    return () => {
      setCurrentPage(page);
      setCurrentPageType(type);
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
              active={currentPage === data.page} // initial, true, false
            />
          )}
        </HeroBanner.Members>
      </HeroBanner.Body>
    </HeroBanner>
  );
}

export default Hero;


