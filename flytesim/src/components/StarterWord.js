import React from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const StarterWord = ({soloStarterWord, starterWordClicked, index}) => {


    return (
      <>

      <button type="submit" onClick={starterWordClicked} value={index}>
      {soloStarterWord.word}
      </button>

      
      </>
    )
  }
  
  export default StarterWord;