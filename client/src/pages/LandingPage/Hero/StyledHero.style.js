

import styled from 'styled-components';

export default styled.header`
  background-color: #ff7300;
  width: 100%;
  position: relative;
  /* margin-bottom: 20px; */

  .header-body {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .heading-container {
    margin-bottom: 20px;
  }

  .heading-container h1 {
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
  }

  .heading-container h1::before {
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: black;
  }

  .heading-container h1:hover {
    color: black;
  } 

  .header-content {
    padding: 10px;
  }

  .members-container {
    padding: 10px;
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    min-width: 300px;
  }
`;

