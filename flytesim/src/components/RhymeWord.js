import React from 'react';
import styled from "styled-components";


const RhymeWord = ({rhymeWord, rhymeWordClicked, index, showResult}) => {



// const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
// const rhymeWordMap = rhymeWord.value.map((word) => {
//   return <p>{rhymeWord.word}</p>
// })
// console.log(rhymeWordMap)

    return (
      <>
      <ButtonStyle>
      <button type="submit" onClick={rhymeWordClicked} value={index}>
      {rhymeWord.word}
      </button>
      </ButtonStyle>
      
      </>
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