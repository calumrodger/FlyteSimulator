import React from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const StarterWord = ({starterWord, starterWordClicked, index}) => {


    return (
      <>
      <ButtonStyle>
      <button type="submit" onClick={starterWordClicked} value={index}>
      {starterWord.word}
      </button>
      </ButtonStyle>
      
      </>
    )
  }
  
  export default StarterWord;


  const ButtonStyle = styled.div`

  button{
    font-family: 'Bebas Neue';
    background-color: #019DE0;
    border-color: gold;
    padding: 15px 32px;
    text-align: center;
    font-size: 25px;
    color: white;
    margin: 0px 0px 0px 0px;
    border-radius: 4px
  }
`;