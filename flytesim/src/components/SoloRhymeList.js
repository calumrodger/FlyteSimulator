import React from "react";
import SoloRhymeWord from "./SoloRhymeWord";
import styled from "styled-components";

const SoloRhymeList = ({ soloRhymeWordsList, rhymeWordClicked }) => {

// const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
const reducedWordsList = soloRhymeWordsList.slice(0, 10);

	const rhymeList = reducedWordsList.map((soloRhymeWord, index) => {
		return(
			<RhymeWordStyle>
			<div key={index} className="component-item">
					<SoloRhymeWord soloRhymeWord={soloRhymeWord} index={index} rhymeWordClicked={rhymeWordClicked}/>
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
 export default SoloRhymeList;

 const RhymeWordStyle = styled.div`

 display: inline-block;
 margin: 4px 2px;
 padding: 5px 20px;
 border-radius: 8px;
 
 `
