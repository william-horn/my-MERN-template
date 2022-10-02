

import styled from 'styled-components';

const NormalText = styled.p`
  ${({theme, color, marginBottom=false}) => `
    color: ${color || theme.textTwo.color};
    font-family: ${theme.textTwo.fontFamily};
    letter-spacing: ${theme.textTwo.letterSpacing};
    font-weight: ${theme.textTwo.fontWeight};
    font-size: ${theme.textTwo.fontSize};
    margin-bottom: ${marginBottom || theme.textTwo.marginBottom};
  `}  
`

NormalText.defaultProps = { className: 'normal text' }

export default NormalText;