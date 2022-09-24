

import styled from 'styled-components';

const NormalLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: red;

  &:hover {
    color: #e00000;
  }
`;

NormalLink.defaultProps = { className: 'normal link' };

export default NormalLink;