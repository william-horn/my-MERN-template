
import styled from 'styled-components';

export default styled.div`
  min-height: ${({minHeight}) => minHeight || "initial"};
  background-color: ${({backgroundColor}) => backgroundColor || "initial"};
  padding: ${({padding}) => padding || "initial"};
`;

