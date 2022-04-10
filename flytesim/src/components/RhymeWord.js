import React from "react";
import styled from "styled-components";



const RhymeWord = ({soloRhymeWord, rhymeWordClicked, index, showResult}) => {



// const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
// const rhymeWordMap = rhymeWord.value.map((word) => {
//   return <p>{rhymeWord.word}</p>
// })
// console.log(rhymeWordMap)

    return (
      <>
      <ButtonStyle>
      <button type="submit" onClick={rhymeWordClicked} value={index}>
      {soloRhymeWord.word}
      </button>
      </ButtonStyle>
      
      </>
    )
  }
  
  export default RhymeWord;


const ButtonStyle = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');;

button{
  font-family: 'Bebas Neue';
  background-color: #019DE0;
  border-color: gold;
  padding: 10px 20px;
  text-align: center;
  font-size: 25px;
  color: white;
}
`;

