
import styled from 'styled-components';
import { getMediaQuery } from '../../lib/helpers/mediaQueries';

// todo: find general way to pass props directly from component to here
// todo: find way to modularize responsiveness 

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  
  ${({
    minHeight='initial', 
    padding='initial', 
    paddingLeft='initial', 
    paddingRight='initial',
    paddingTop='initial',
    paddingBottom='initial',
    backgroundColor='initial',
  }) => `
    min-height: ${minHeight};
    padding: ${padding};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    padding-bottom: ${paddingBottom};
    padding-top: ${paddingTop};
    background-color: ${backgroundColor};
  `}

  /* @media screen and (max-width: 450px) {
    
  } */
  ${getMediaQuery}
`;

Container.defaultProps = { className: 'container' };

export default Container;
