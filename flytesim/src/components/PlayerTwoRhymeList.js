import React from "react";
import PlayerTwoRhymeWord from "./PlayerTwoRhymeWord";
import styled from "styled-components";

const PlayerTwoRhymeList = ({ playerTwoRhymeWordsList, playerTwoRhymeWordClicked }) => {

    const filteredWordsList = playerTwoRhymeWordsList.filter((word) => word.word.indexOf(" ") === -1)
    const cleanFilter1 = filteredWordsList.splice((word) => (word.word !== "rape"))
    const sortedList = cleanFilter1.splice((word) => (word.word !== "fuck"))
    const shuffledRhymeList = sortedList.sort(() => 0.5 - Math.random());
    const tenRandomRhymeWords = shuffledRhymeList.slice(0, 10);
    
        const rhymeList = tenRandomRhymeWords.map((playerTwoRhymeWord, index) => {
		return(
			<RhymeWordStyle>
			<div key={index} className="component-item">
					<PlayerTwoRhymeWord playerTwoRhymeWord={playerTwoRhymeWord} index={index} playerTwoRhymeWordClicked={playerTwoRhymeWordClicked}/>
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
