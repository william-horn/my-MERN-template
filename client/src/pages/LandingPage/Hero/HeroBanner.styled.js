import React, { useRef } from 'react';
import styled from 'styled-components';

const HeroBanner = styled.header`
  background-color: #ff7300;
  width: 100%;
  position: relative;
`;

const Head = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
`;

const StyledTitleContainer = styled.div`
  margin-bottom: 20px;
`;

const StyledTitle = styled.h1`
  margin: 0 auto;
  text-align: center;
  color: white;
  /* font-family: system-ui; */
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 2.5rem;
  position: relative;
  width: fit-content;
  transition: color 0.25s;
  cursor: pointer;
  /* text-decoration: underline; */

  &::before {
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: black;
  }

  &:hover {
    color: black;
  } 
`;

const Title = (props) => {
  return (
    <StyledTitleContainer className="hero-banner title-container">
      <StyledTitle className="hero-banner title" {...props}>{props.children}</StyledTitle>
    </StyledTitleContainer>
  );
}

const Body = styled.div`
  padding: 10px;
`;

const Members = styled.div`
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 200px;
`;

HeroBanner.defaultProps = { className: 'hero-banner' };
Head.defaultProps = { className: 'hero-banner head' };
Body.defaultProps = { className: 'hero-banner body' };
Members.defaultProps = { className: 'hero-banner members' };

HeroBanner.Title = Title;
HeroBanner.Head = Head;
HeroBanner.Body = Body;
HeroBanner.Members = Members;

export default HeroBanner;