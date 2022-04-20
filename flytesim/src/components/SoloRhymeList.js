import React from "react";
import SoloRhymeWord from "./SoloRhymeWord";
import styled from "styled-components";

const SoloRhymeList = ({ soloRhymeWordsList, setSoloRhymeWordValue, setSoloRhymeWordsList, setSoloRhymeWord, setShowSoloRhymes, soloRhymeWord, setShowSoloLineTwoInput}) => {

const filterOutSpaces = soloRhymeWordsList.filter((word) => word.word.indexOf(" ") === -1)
const filterOutRareWords = filterOutSpaces.filter((word) => word.score > 100)
const cleanFilter1 = filterOutRareWords.splice((word) => (word.word !== "rape"))
console.log(cleanFilter1)
const sortedList = cleanFilter1.splice((word) => (word.word !== "fuck"))
const shuffledRhymeList = sortedList.sort(() => 0.5 - Math.random());
const tenRandomRhymeWords = shuffledRhymeList.slice(0, 10);

const soloRhymeWordClicked = (e) => {
	let index = e.target.value;
	let selectedWord = tenRandomRhymeWords[index];
	let stateWord = { ...soloRhymeWord };
	stateWord["word"] = selectedWord["word"];
	stateWord["score"] = selectedWord["score"];
	setSoloRhymeWord(stateWord);
	setSoloRhymeWordsList(tenRandomRhymeWords);
	if (selectedWord.score > 4000){
	  setSoloRhymeWordValue(1)
	}
	if ((selectedWord.score <= 4000) && (selectedWord.score > 3000)){
		setSoloRhymeWordValue(2)
	}
	if ((selectedWord.score <= 3000) && (selectedWord.score > 2000)){
		setSoloRhymeWordValue(3)
	}
	if ((selectedWord.score <= 2000) && (selectedWord.score > 1000)){
		setSoloRhymeWordValue(4)
	}
	if (selectedWord.score < 1000){
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
