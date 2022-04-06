import React, {Fragment, useState, useEffect} from 'react';
import StarterWords from '../components/StarterWords'
import RhymeList from '../components/RhymeList'

const GameContainer = () => {

    const starterWordsList = ["duck", "tip", "bomb", "grub", "daft", "eat"];
    const [starterWord, setStarterWord] = useState("")
    const [rhymeWord, setRhymeWord] = useState({})
    const [rhymeWordsList, setRhymeWordsList] = useState([])
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        fetch("https://api.datamuse.com/words?rel_rhy=" + starterWord)
        .then(response => response.json())
        .then(data => setRhymeWordsList(data))
    }, [starterWord]);
    
    const starterWordClicked = (e) => {
        setStarterWord(e.target.value)
        setShowResult(false)
    }

    const rhymeWordClicked = (e) => {
        const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
        const reducedWordsList = filteredWordsList.slice(0, 10);
        let index = e.target.value;
        let selectedWord = rhymeWordsList[index];
        let stateWord = {...rhymeWord}
        stateWord['score'] = selectedWord['score']
        stateWord['word'] = selectedWord['word']
        console.log(stateWord)
        setRhymeWord(stateWord);
        setRhymeWordsList(reducedWordsList)
        setShowResult(true);
    }


    return(
        <>
        <StarterWords starterWordsList={starterWordsList} starterWordClicked={starterWordClicked}/>
        <RhymeList rhymeWordsList={rhymeWordsList} rhymeWordClicked={rhymeWordClicked} showResult={showResult}/>
        {showResult ? <p>Your words are {starterWord} and {rhymeWord.word}! Your score is {rhymeWord.score}!</p> : null}
        </>
    )

}

export default GameContainer;