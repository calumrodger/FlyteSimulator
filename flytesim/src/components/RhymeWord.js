import React from 'react';
import styled from "styled-components";


const RhymeWord = ({rhymeWord, rhymeWordClicked}) => {

  
  
    return (
      <ButtonStyle>
      <button type="submit" onClick={rhymeWordClicked} value={rhymeWord.score}>
      {rhymeWord.word}
      </button>
      </ButtonStyle>
    )
  }
  
  export default RhymeWord;

  const ButtonStyle = styled.div`
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
  }`