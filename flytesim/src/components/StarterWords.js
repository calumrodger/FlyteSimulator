import React from 'react'

const StarterWords = ({ starterWordsList, starterWordClicked }) => {

    const starterWordsButtons = starterWordsList.map((word) => {
        return <button type="submit" onClick={starterWordClicked} value={word}>{word}</button>
    })



    return (
        <>
        <div>{starterWordsButtons}</div>
        </>
    )
}

export default StarterWords