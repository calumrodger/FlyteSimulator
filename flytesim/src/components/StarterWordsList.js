import React from 'react'
import styled from "styled-components";
import StarterWord from './StarterWord';

const StarterWordsList = ({ starterWordsList, starterWordClicked }) => {


    const starterWordsButtons = starterWordsList.map((soloStarterWord, index) => {
		return(
			<button type="submit" onClick={starterWordClicked} key={index} value={soloStarterWord}>
					<StarterWord soloStarterWord={soloStarterWord} index={index}/>
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

