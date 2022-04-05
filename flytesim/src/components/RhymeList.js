import React from 'react'
import RhymeWord from './RhymeWord'
import styled from "styled-components";

const RhymeList = ({rhymeWordsList, rhymeWordClicked}) => {

const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
const reducedWordsList = filteredWordsList.slice(0, 10);



	const rhymeList = reducedWordsList.map((rhymeWord, index) => {
		return(
			<div key={index} className="component-item">
					<RhymeWord rhymeWord={rhymeWord} rhymeWordClicked={rhymeWordClicked}/>
			</div>
		)
	})


	return (
		<div className="component-list">
     {rhymeList}
   </div>

	)
}
 export default RhymeList;

