
import styled from 'styled-components';
import { getMediaQuery } from '../../lib/helpers/mediaQueries';

// todo: find general way to pass props directly from component to here
// todo: find way to modularize responsiveness 

const Container = styled.div`
  position: relative;
  
  ${({
    minHeight='initial', 
    padding='initial', 
    paddingLeft='initial', 
    paddingRight='initial',
    paddingTop='initial',
    paddingBottom='initial',
    backgroundColor='initial',
    fill='true',
  }) => `
    min-height: ${minHeight};
    padding: ${padding};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    padding-bottom: ${paddingBottom};
    padding-top: ${paddingTop};
    background-color: ${backgroundColor};
    width: ${fill === 'true' ? '100%' : 'initial'};
    height: ${fill === 'true' ? '100%' : 'initial'};
  `}

  /* @media screen and (max-width: 450px) {
    
  } */
  ${getMediaQuery}
`;

Container.defaultProps = { className: 'container' };

export default Container;
