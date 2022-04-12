import React from 'react'
import styled from "styled-components";
import StarterWord from './StarterWord';

const StarterWordsList = ({ starterWordsList, starterWordClicked }) => {

const shuffledStarterWordsList = starterWordsList.sort(() => 0.5 - Math.random());

let sixRandomStarterWords = shuffledStarterWordsList.slice(0, 6);


    const starterWordsButtons = sixRandomStarterWords.map((soloStarterWord, index) => {
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

