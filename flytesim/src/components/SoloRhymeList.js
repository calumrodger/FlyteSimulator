import React from "react";
import SoloRhymeWord from "./SoloRhymeWord";
import styled from "styled-components";

const SoloRhymeList = ({ soloRhymeWordsList, setSoloRhymeWordValue, setSoloRhymeWordsList, setSoloRhymeWord, setShowSoloRhymes, soloRhymeWord, setShowSoloLineTwoInput}) => {

const filteredWordsList = soloRhymeWordsList.filter((word) => word.word.indexOf(" ") === -1)
const cleanFilter1 = filteredWordsList.splice((word) => (word.word !== "rape"))
const sortedList = cleanFilter1.splice((word) => (word.word !== "fuck"))
const shuffledRhymeList = sortedList.sort(() => 0.5 - Math.random());
const tenRandomRhymeWords = shuffledRhymeList.slice(0, 10);

const soloRhymeWordClicked = (e) => {
	let index = e.target.value;
	let selectedWord = tenRandomRhymeWords[index];
	let stateWord = { ...soloRhymeWord };
	stateWord["score"] = selectedWord["score"];
	stateWord["word"] = selectedWord["word"];
	setSoloRhymeWord(stateWord);
	setSoloRhymeWordsList(tenRandomRhymeWords);
	if (selectedWord.score > 1000){
	  setSoloRhymeWordValue(5)
	}
	setShowSoloRhymes(false)
	setShowSoloLineTwoInput(true)
  };

	const rhymeList = tenRandomRhymeWords.map((soloRhymeWord, index) => {
		return(
			<RhymeWordStyle>
			<div key={index} className="component-item">
					<SoloRhymeWord soloRhymeWordClicked={soloRhymeWordClicked} soloRhymeWord={soloRhymeWord} index={index}/>
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
