
import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
  ${({theme, textPop, direction}) => `
    background-color: ${theme.buttonOne.backgroundColor};
    color: ${theme.buttonOne.color};
    font-family: ${theme.buttonOne.fontFamily};

    &:hover {
      background-color: ${theme.buttonOne.backgroundColorHover};
      ${textPop !== 'false' ? (direction === 'left' ? 'padding-right: 20px' : 'padding-left: 20px') : ''};
    }
  `}

  border: 0;
  /* border-radius: 10px; */
  font-size: 1rem;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: background-color 0.2s, padding 0.3s;
`;

StyledPrimaryButton.defaultProps = { className: 'button primary' };

export default StyledPrimaryButton;