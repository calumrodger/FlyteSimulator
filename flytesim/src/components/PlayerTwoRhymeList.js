import React from "react";
import PlayerTwoRhymeWord from "./PlayerTwoRhymeWord";
import styled from "styled-components";

const PlayerTwoRhymeList = ({ playerTwoRhymeWordsList, playerTwoRhymeWordClicked }) => {

// const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
const reducedWordsList = playerTwoRhymeWordsList.slice(0, 10);

	const rhymeList = reducedWordsList.map((playerTwoRhymeWord, index) => {
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
