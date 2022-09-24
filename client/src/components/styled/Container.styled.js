
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${({minHeight='initial', backgroundColor='initial', padding='initial'}) => `
    min-height: ${minHeight};
    background-color: ${backgroundColor};
    padding: ${padding};
  `}
`;

Container.defaultProps = { className: 'container' };

export default Container;
