
import styled from 'styled-components';

const StyledHomeThemeButtonPrimary = styled.button`
  border: 0;
  border-radius: 15px;
  background-color: #be5e0d;
  color: white;
  font-size: 1.3rem;
  padding: 20px;
  position: relative;
  cursor: pointer;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  justify-content: center;
  transition: background-color 0.2s, padding 0.3s;

  &:hover {
    background-color: #e5812a;
    ${({textPop, direction = 'right'}) => textPop !== 'false' ? (direction === 'left' ? 'padding-right: 30px' : 'padding-left: 30px') : ''};
  }
`;

StyledHomeThemeButtonPrimary.defaultProps = { className: 'button primary' };

export default StyledHomeThemeButtonPrimary;