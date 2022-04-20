import React from "react";
import PlayerOneRhymeWord from "./PlayerOneRhymeWord";
import styled from "styled-components";

const PlayerOneRhymeList = ({ playerOneRhymeWordsList, setPlayerOneRhymeWordValue, setPlayerOneRhymeWordsList, setPlayerOneRhymeWord, setShowPlayerOneRhymes, playerOneRhymeWord, setShowPlayerOneLineTwoInput }) => {

    const filterOutSpaces = playerOneRhymeWordsList.filter((word) => word.word.indexOf(" ") === -1)
    const filterOutRareWords = filterOutSpaces.filter((word) => word.score > 100)
    const cleanFilter1 = filterOutRareWords.splice((word) => (word.word !== "rape"))
    const sortedList = cleanFilter1.splice((word) => (word.word !== "fuck"))
    const shuffledRhymeList = sortedList.sort(() => 0.5 - Math.random());
    const tenRandomRhymeWords = shuffledRhymeList.slice(0, 10);
    
    const playerOneRhymeWordClicked = (e) => {
        let index = e.target.value;
        let selectedWord = tenRandomRhymeWords[index];
        let stateWord = { ...playerOneRhymeWord };
        stateWord["score"] = selectedWord["score"];
        stateWord["word"] = selectedWord["word"];
        setPlayerOneRhymeWord(stateWord);
        setPlayerOneRhymeWordsList(tenRandomRhymeWords);
        if (selectedWord.score > 4000){
            setPlayerOneRhymeWordValue(1)
          }
          if ((selectedWord.score <= 4000) && (selectedWord.score > 3000)){
              setPlayerOneRhymeWordValue(2)
          }
          if ((selectedWord.score <= 3000) && (selectedWord.score > 2000)){
              setPlayerOneRhymeWordValue(3)
          }
          if ((selectedWord.score <= 2000) && (selectedWord.score > 1000)){
              setPlayerOneRhymeWordValue(4)
          }
          if (selectedWord.score < 1000){
              setPlayerOneRhymeWordValue(5)
          }
        setShowPlayerOneRhymes(false)
        setShowPlayerOneLineTwoInput(true)
      };
        const rhymeList = tenRandomRhymeWords.map((playerOneRhymeWord, index) => {

		return(
			<RhymeWordStyle>
			<div key={index} className="component-item">
					<PlayerOneRhymeWord playerOneRhymeWordClicked={playerOneRhymeWordClicked} playerOneRhymeWord={playerOneRhymeWord} index={index} />
			</div>
			</RhymeWordStyle>
		)
	})


	return (
		<div className="component-list">
     {rhymeList}
   </div>

	)
}
 export default PlayerOneRhymeList;

 const RhymeWordStyle = styled.div`

 display: inline-block;
 margin: 4px 2px;
 padding: 5px 20px;
 border-radius: 8px;
 
 `
