import React from 'react'
import styled from "styled-components";
import StarterWord from './StarterWord';

const StarterWordsList = ({ starterWordsList, starterWordClicked }) => {


    const starterWordsButtons = starterWordsList.map((starterWord, index) => {
		return(
			<button type="submit" onClick={starterWordClicked} key={index} value={starterWord}>
					<StarterWord starterWord={starterWord} index={index}/>
			</button>
		)
	})



    return (
        <>

                <ListStyling>{starterWordsButtons}</ListStyling>

        </>
    )
}

export default StarterWordsList

const ListStyling = styled.div`

`

