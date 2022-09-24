
import React from 'react';
import StyledAttraction from './StyledAttraction.style';
import styled from 'styled-components';

const Left = styled.div`
  /* flex-grow: 1; */
  /* width: 25%; */
  margin-bottom: 30px;
  padding: 20px;
  /* border-radius: 15px; */
  box-shadow: -5px -5px 15px #8b8b8b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  p {
    /* color: #ffa600; */
    text-align: left;
  }
`;

const Right = styled.div`
  /* display: flex; */
  /* margin-top: 25px; */
  /* display: flex;
  flex-direction: column; */
  overflow-y: auto;
  margin-bottom: 30px;
  padding: 20px;
  min-width: 400px;
  min-height: 200px;
  /* flex-grow: 5; */
  /* width: 75%; */
  border-radius: 15px;
  border-left: 10px solid #e17e27;
  box-shadow: 5px 5px 10px #e2e2e2;
  flex: 2;
  transition: border-left-width 0.3s;

  &:hover {
    border-left-width: 20px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
`;

const Attraction = styled.div`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  gap: 10%;

  p {
    text-align: center;
    margin-bottom: 20px;
    color: #535353;
    /* word-break: break-all; */
    font-size: 1rem;
  }
`;

Attraction.Left = Left;
Attraction.Right = Right;

export default Attraction;


