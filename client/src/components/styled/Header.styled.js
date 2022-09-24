

import React from 'react';
import styled from 'styled-components';
import PrimaryText from '../styled/PrimaryText.styled';

const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  color: #535353;
  /* font-family: system-ui; */
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 2rem;
  /* text-decoration: underline; */
  margin-bottom: 20px;
`;

const Subtext = styled(PrimaryText)`
  color: #e17e27;
  font-style: italic;
  text-decoration: underline;
`;

const Header = styled.header`
  margin-bottom: 60px;
`;

Header.defaultProps = { className: 'header' };
Title.defaultProps = { className: 'header-title' };
Subtext.defaultProps = { className: 'header-title-subtext' };

Header.Title = Title;
Header.Subtext = Subtext;

export default Header;

