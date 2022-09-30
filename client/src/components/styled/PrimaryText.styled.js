

import styled from 'styled-components';

const PrimaryText = styled.p`
  ${({theme, color}) => `
    color: ${color || theme.textOne.color};
    font-family: ${theme.textOne.fontFamily};
    font-size: ${theme.textOne.fontSize};
    margin-bottom: ${theme.textOne.marginBottom};
  `}
`

PrimaryText.defaultProps = { className: 'primary text' };

export default PrimaryText;