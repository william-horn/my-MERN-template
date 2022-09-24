

import styled from 'styled-components';

const NormalText = styled.p`
  color: #535353;
  font-family: 'Kanit', sans-serif;
  letter-spacing: 1px;
  font-weight: 800;
`

NormalText.defaultProps = { className: 'normal text' }

export default NormalText;