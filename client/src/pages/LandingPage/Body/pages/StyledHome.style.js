
import styled from 'styled-components';

export default styled.div`
  min-height: 100vh;

  header {
    margin-bottom: 40px;
  }

  header p {
    color: #e17e27;
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
    background-color: #be5e0d;
    color: white;
    font-size: 1.3rem;
    padding: 20px;
    position: relative;
    cursor: pointer;
    display: inline;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  button:hover {
    background-color: #e5812a;
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
    color: #535353;
    /* word-break: break-all; */
    font-size: 1rem;
  }

  .info-section .left p {
    /* color: #ffa600; */
  }

  .info-section .left {
    /* flex-grow: 1; */
    /* width: 25%; */
    padding: 20px;
    border-radius: 15px;
    /* box-shadow: -5px -5px black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .info-section .right {
    /* display: flex; */
    padding: 20px;
    /* flex-grow: 5; */
    /* width: 75%; */
    border-radius: 15px;
    border-left: 10px solid #e17e27;
    /* box-shadow: 5px 5px #ba5908; */
    flex: 2;
  }


`;



