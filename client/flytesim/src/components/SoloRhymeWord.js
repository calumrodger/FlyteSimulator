import React from "react";
import styled from "styled-components";



const SoloRhymeWord = ({soloRhymeWord, soloRhymeWordClicked, index}) => {


    return (
      <>
      <ButtonStyle>
      <button type="submit" onClick={soloRhymeWordClicked} value={index}>
      {soloRhymeWord.word}
      </button>
      </ButtonStyle>
      
      </>
    )
  }
  
  export default SoloRhymeWord;


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

