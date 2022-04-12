import React from "react";
import PlayerTwoRhymeWord from "./PlayerTwoRhymeWord";
import styled from "styled-components";

const PlayerTwoRhymeList = ({ playerTwoRhymeWordsList, setPlayerTwoRhymeWordValue, setPlayerTwoRhymeWordsList, setPlayerTwoRhymeWord, setShowPlayerTwoRhymes, playerTwoRhymeWord, setShowPlayerTwoLineTwoInput }) => {

    const filteredWordsList = playerTwoRhymeWordsList.filter((word) => word.word.indexOf(" ") === -1)
    const cleanFilter1 = filteredWordsList.splice((word) => (word.word !== "rape"))
    const sortedList = cleanFilter1.splice((word) => (word.word !== "fuck"))
    const shuffledRhymeList = sortedList.sort(() => 0.5 - Math.random());
    const tenRandomRhymeWords = shuffledRhymeList.slice(0, 10);
    
    const playerTwoRhymeWordClicked = (e) => {
        let index = e.target.value;
        let selectedWord = tenRandomRhymeWords[index];
        let stateWord = { ...playerTwoRhymeWord };
        stateWord["score"] = selectedWord["score"];
        stateWord["word"] = selectedWord["word"];
        setPlayerTwoRhymeWord(stateWord);
        setPlayerTwoRhymeWordsList(tenRandomRhymeWords);
        if (selectedWord.score > 1000){
          setPlayerTwoRhymeWordValue(5)
        }
        setShowPlayerTwoRhymes(false)
        setShowPlayerTwoLineTwoInput(true)
      };
        const rhymeList = tenRandomRhymeWords.map((playerTwoRhymeWord, index) => {

		return(
			<RhymeWordStyle>
			<div key={index} className="component-item">
					<PlayerTwoRhymeWord playerTwoRhymeWordClicked={playerTwoRhymeWordClicked} playerTwoRhymeWord={playerTwoRhymeWord} index={index} />
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
 export default PlayerTwoRhymeList;

 const RhymeWordStyle = styled.div`

 display: inline-block;
 margin: 4px 2px;
 padding: 5px 20px;
 border-radius: 8px;
 
 `
