import React from "react";
import styled from "styled-components";

const RhymeWord = ({ rhymeWord, rhymeWordClicked }) => {
  return (
    <ButtonStyle>
      <button type="submit" onClick={rhymeWordClicked} value={rhymeWord.score}>
        {rhymeWord.word}
      </button>
      </ButtonStyle>

  );
};

export default RhymeWord;

const ButtonStyle = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');;

button{
  font-family: 'Bebas Neue';
  background-color: #019DE0;
  border-color: gold;
  padding: 15px 32px;
  text-align: center;
  font-size: 25px;
  color: white;
}
`;


  // button {

  // }`;

// background-color: #4CAF50;
// border: none;
// color: white;
// padding: 10px 20px;
// text-align: center;
// text-decoration: none;
// font-size: 16px;
// margin: 4px 2px;
// cursor: pointer;
// border-radius: 8px;

// display: grid;
// grid-template-columns: 1fr 1fr;
// grid-template-rows: 2fr 1fr;
// grid-template-areas: "word word" "score score";
// background-color: #019DE0;
// color: white;
// border: none;
// border-radius: 5px;
// padding: 10px;
// size: 20px;
// font-size: 20px;
// font-weight: bold;
// margin: 10px;
// width: 125px;
