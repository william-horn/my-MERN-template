
import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;

  header {
    margin-bottom: 40px;
  }

  h2 {
    margin: 0 auto;
    text-align: center;
    color: black;
    /* font-family: system-ui; */
    font-family: 'Rubik Mono One', sans-serif;
    font-size: 2rem;
    text-decoration: underline;
    margin-bottom: 20px;
  }

  .page-content p {
    text-align: left;
    width: fit-content;
  }

  button {
    border: 0;
    border-radius: 15px;
    background-color: #ffa600;
    color: white;
    font-size: 1.6rem;
    padding: 20px;
    position: relative;
    cursor: pointer;
    display: inline;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  button:hover {
    background-color: #ffd079;
  }

  .info-section {
    /* background-color: black; */
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
  }

  .info-section p {
    text-align: center;
    margin-bottom: 20px;
    width: fit-content;
    word-break: break-all;
  }

  .info-section .left p {
    color: #ffa600;
  }

  .info-section .left {
    /* flex-grow: 1; */
    /* width: 25%; */
    padding: 20px;
    border-radius: 15px;
    box-shadow: -5px -5px black;
    flex-grow: 1;
  }

  .info-section .right {
    padding: 20px;
    /* flex-grow: 5; */
    /* width: 75%; */
    border-radius: 15px;
    box-shadow: 5px 5px #ffa600;
    flex-grow: 1;
  }

`;



