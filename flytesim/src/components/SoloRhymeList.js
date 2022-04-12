import React from "react";
import SoloRhymeWord from "./SoloRhymeWord";
import styled from "styled-components";

const SoloRhymeList = ({ soloRhymeWordsList, rhymeWordClicked }) => {

const filteredWordsList = soloRhymeWordsList.filter((word) => word.word.indexOf(" ") === -1)
const cleanFilter1 = filteredWordsList.splice((word) => (word.word !== "rape"))
const sortedList = cleanFilter1.splice((word) => (word.word !== "fuck"))
const shuffledRhymeList = sortedList.sort(() => 0.5 - Math.random());
const tenRandomRhymeWords = shuffledRhymeList.slice(0, 10);

	const rhymeList = tenRandomRhymeWords.map((soloRhymeWord, index) => {
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
