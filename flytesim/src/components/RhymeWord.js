import React from 'react';


const RhymeWord = ({rhymeWord, rhymeWordClicked}) => {

  
    return (
      <button type="submit" onClick={rhymeWordClicked} value={rhymeWord.word}>
      {rhymeWord.word}
      </button>
    )
  }
  
  export default RhymeWord;