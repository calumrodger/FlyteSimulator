import React, {Fragment, useState, useEffect} from 'react';
import StarterWordsList from '../components/StarterWordsList'
import RhymeList from '../components/RhymeList'

const GameContainer = () => {


    // const starterWordsList = ["duck", "tip", "bomb", "grub", "daft", "eat"];
    const [starterWordsList, setStarterWordsList] = useState([])
    const [starterWord, setStarterWord] = useState("")
    const [rhymeWord, setRhymeWord] = useState({})
    const [rhymeWordsList, setRhymeWordsList] = useState([])
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        fetchStarterWords()
      }, [])

    useEffect(() => {
        fetch("https://api.datamuse.com/words?rel_rhy=" + starterWord.word)
        .then(response => response.json())
        .then(data => setRhymeWordsList(data))
    }, [starterWord]);

    const fetchStarterWords = () => {
        fetch("http://localhost:8080/api/starter_words/")
        .then(response => response.json())
        .then(data => setStarterWordsList(data))
        .then(console.log(starterWordsList))
      }
    
    const starterWordClicked = (e) => {
        let index = e.target.value;
        let selectedWord = starterWordsList[index];
        let stateWord = {...starterWord}
        stateWord['word'] = selectedWord['word']
        stateWord['wordClass'] = selectedWord['wordClass']
        console.log(stateWord)
        setStarterWord(stateWord)
        console.log(starterWord)
        setShowResult(false)
    }

    const rhymeWordClicked = (e) => {
        // const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
        const reducedWordsList = rhymeWordsList.slice(0, 10);
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
        <StarterWordsList starterWordsList={starterWordsList} starterWordClicked={starterWordClicked}/>
        <RhymeList rhymeWordsList={rhymeWordsList} rhymeWordClicked={rhymeWordClicked} showResult={showResult}/>
        {showResult ? <p>Your words are {starterWord.word} and {rhymeWord.word}! Your score is {rhymeWord.score}!</p> : null}
        </>
    )

}

export default GameContainer;