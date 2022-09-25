
import React from 'react';
import styled from 'styled-components';

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
    /* color: #535353; */
    color: var(--primary-color);
    font-size: 1rem;
  }

  ${props => {
    return '';
  }}
`;

const Head = styled.div`
  /* flex-grow: 1; */
  /* width: 25%; */
  margin-bottom: 30px;
  padding: 20px;
  min-width: 250px;
  /* border-radius: 15px; */
  /* box-shadow: -5px -5px 20px #0000003b; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  ${({skew='left', align='left'}) => `
    box-shadow: ${skew === 'left' ? '-5px -5px' : (skew === 'right' ? '5px -5px' : '0 0')} 20px #0000003b;
    .text {
      text-align: ${align};
    }
  `}
`;

const Body = styled.div`
  /* display: flex; */
  /* margin-top: 25px; */
  /* display: flex;
  flex-direction: column; */
  overflow-y: auto;
  margin-bottom: 30px;
  padding: 20px;
  min-width: 200px;
  min-height: 200px;
  /* flex-grow: 5; */
  /* width: 75%; */
  border-radius: 15px;
  /* border-left: 10px solid #e17e27; */
  box-shadow: 5px 5px 10px #e2e2e2;
  flex: 2;
  /* transition: border-left-width 0.3s; */

  ${({skew='left', align='left'}) => `
    border-${skew}: 10px solid #e17e27;
    transition: border-${skew}-width 0.3s;

    &:hover {
      border-${skew}-width: 20px;
    }

    .text {
      text-align: ${align};
    }
  `}

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(135, 135, 135, 0);
  }

  &:hover::-webkit-scrollbar-thumb  {
    background: rgba(135, 135, 135, 0.3);
  }
`;

Attraction.defaultProps = { className: 'attraction' };
Head.defaultProps = { className: 'attraction head' };
Body.defaultProps = { className: 'attraction body' };

Attraction.Head = Head;
Attraction.Body = Body;

export default Attraction;


