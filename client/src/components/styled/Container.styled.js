
import styled from 'styled-components';

// todo: find general way to pass props directly from component to here
// todo: find way to modularize responsiveness 

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${({
    minHeight='initial', 
    padding='initial', 
    paddingLeft='initial', 
    paddingRight='initial',
    paddingTop='initial',
    paddingBottom='initial'
  }) => `
    min-height: ${minHeight};
    padding: ${padding};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    padding-bottom: ${paddingBottom};
    padding-top: ${paddingTop};
  `}

  /* @media screen and (max-width: 450px) {
    
  } */
`;

Container.defaultProps = { className: 'container' };

export default Container;
