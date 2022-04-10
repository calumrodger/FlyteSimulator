import React from "react";
import PlayerOneRhymeWord from "./PlayerOneRhymeWord";
import styled from "styled-components";

const PlayerOneRhymeList = ({ playerOneRhymeWordsList, playerOneRhymeWordClicked }) => {

// const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
const reducedWordsList = playerOneRhymeWordsList.slice(0, 10);

	const rhymeList = reducedWordsList.map((playerOneRhymeWord, index) => {
		return(
			<RhymeWordStyle>
			<div key={index} className="component-item">
					<PlayerOneRhymeWord playerOneRhymeWord={playerOneRhymeWord} index={index} playerOneRhymeWordClicked={playerOneRhymeWordClicked}/>
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
