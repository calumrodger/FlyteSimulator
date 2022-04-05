import React, {Fragment, useState, useEffect} from 'react';

const GameContainer = () => {

    const starterWordsList = ["duck", "tip", "bomb", "grub", "daft", "eat"];
    const [starterWord, setStarterWord] = useState("")
    const [rhymeWord, setRhymeWord] = useState([])
    const [rhymeWordsList, setRhymeWordsList] = useState([])
    const [showRhymes, setShowRhymes] = useState(false)

    useEffect(() => {
        fetch("https://api.datamuse.com/words?rel_rhy=" + starterWord)
        .then(response => response.json())
        .then(data => setRhymeWordsList(data))
    }, [starterWord]);
    
    const starterWordClicked = (e) => {
        setStarterWord(e.target.value)
        setShowRhymes(true)
    }

    const rhymeWordClicked = (e) => {
        setRhymeWord(e.target.value)
        console.log(rhymeWord)
        setShowRhymes(false)
    }

    const rhymeWordsMapped = rhymeWordsList.map((rhymeWordsList))

    return(
        <>
        {starterWordsList.map(word => (
        <button type="submit" onClick={starterWordClicked} value={word}>{word}</button> 
        ))}
        {showRhymes ? rhymeWordsList.map(word => (
        // <button type="submit" onClick={rhymeWordClicked}>{rhymeWordsList.word}</button> 
        <p>{rhymeWordsList.word}</p> 
        )) : null}
        </>
    )

}

export default GameContainer;