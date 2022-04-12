import React from "react";
import PlayerOneRhymeWord from "./PlayerOneRhymeWord";
import styled from "styled-components";

const PlayerOneRhymeList = ({ playerOneRhymeWordsList, setPlayerOneRhymeWordValue, setPlayerOneRhymeWordsList, setPlayerOneRhymeWord, setShowPlayerOneRhymes, playerOneRhymeWord, setShowPlayerOneLineTwoInput }) => {

    const filteredWordsList = playerOneRhymeWordsList.filter((word) => word.word.indexOf(" ") === -1)
    const cleanFilter1 = filteredWordsList.splice((word) => (word.word !== "rape"))
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
        if (selectedWord.score > 1000){
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
