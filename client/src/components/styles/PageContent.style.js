
import styled from 'styled-components';

export default styled.div`
  margin-right: ${({marginRight}) => marginRight || "20%"};
  margin-left: ${({marginLeft}) => marginLeft || "20%"};

  @media screen and (max-width: 1300px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

