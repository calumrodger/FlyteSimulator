import React from "react";
import RhymeWord from "./RhymeWord";
import styled from "styled-components";

const RhymeList = ({ soloRhymeWordsList, rhymeWordClicked }) => {

// const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
const reducedWordsList = soloRhymeWordsList.slice(0, 10);

	const rhymeList = reducedWordsList.map((soloRhymeWord, index) => {
		return(
			<RhymeWordStyle>
			<div key={index} className="component-item">
					<RhymeWord soloRhymeWord={soloRhymeWord} index={index} rhymeWordClicked={rhymeWordClicked}/>
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
 export default RhymeList;

 const RhymeWordStyle = styled.div`

 display: inline-block;
 margin: 4px 2px;
 padding: 5px 20px;
 border-radius: 8px;
 
 `
