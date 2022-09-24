
import styled from 'styled-components';

export default styled.button`
  border: 0;
  border-radius: 15px;
  background-color: #be5e0d;
  color: white;
  font-size: 1.3rem;
  padding: 20px;
  position: relative;
  cursor: pointer;
  display: inline;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  justify-content: center;
  transition: background-color 0.2s, padding-left 0.3s;

  &:hover {
    background-color: #e5812a;
    padding-left: 30px;
  }
`;
