import React from 'react'
import RhymeWord from './RhymeWord'

const RhymeList = ({rhymeWordsList}) => {

const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
const reducedWordsList = filteredWordsList.slice(0, 10);



	const rhymeList = reducedWordsList.map((rhymeWord, index) => {
		return(
			<div key={index} className="component-item">
				<div className='component'>
					<RhymeWord rhymeWord={rhymeWord} />
				</div>
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