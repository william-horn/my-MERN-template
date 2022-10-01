
import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
  ${({theme, textPop, direction}) => `
    background-color: ${theme.buttonOne.backgroundColor};
    color: ${theme.buttonOne.color};
    font-family: ${theme.buttonOne.fontFamily};

    &:hover {
      background-color: ${theme.buttonOne.backgroundColorHover};
      ${textPop !== 'false' ? (direction === 'left' ? 'padding-right: 30px' : 'padding-left: 30px') : ''};
    }
  `}

  border: 0;
  border-radius: 15px;
  font-size: 1.3rem;
  padding: 20px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: background-color 0.2s, padding 0.3s;
`;

StyledPrimaryButton.defaultProps = { className: 'button primary' };

export default StyledPrimaryButton;