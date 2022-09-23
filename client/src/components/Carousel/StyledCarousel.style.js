
import styled from 'styled-components';

export default styled.div`
    /* width: 100%; */
    display: flex;
    align-items: flex-start;
    /* justify-content: center; */
    position: absolute;
    /* overflow: hidden; */
    left: -${({offsetX}) => offsetX || 0}px;

    background-color: white;
    height: 100%;
    /* min-width: 200px;
    min-height: 100px; */

    img {
      width: 100%;
      height: 100%;
      /* max-height: 200px; */
      flex: 1;
      opacity: 0.6;
      object-fit: cover;
    }
`;

