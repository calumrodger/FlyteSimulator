import React, {Fragment, useState, useEffect} from 'react';
import StarterWordsList from '../components/StarterWordsList'
import RhymeList from '../components/RhymeList'
import PlayerForm from '../components/PlayerForm';
import Request from '../helpers/request';

const GameContainer = () => {

    const [players, setPlayers] = useState([])
    const [starterWordsList, setStarterWordsList] = useState([])
    const [rhymeWordsList, setRhymeWordsList] = useState([])
    const [starterWord, setStarterWord] = useState({})
    const [rhymeWord, setRhymeWord] = useState({})
    
    const [showResult, setShowResult] = useState(false)
    const [showRhymes, setShowRhymes] = useState(false)
    

    useEffect(() => {
        fetchStarterWordsList()
        fetchPlayers()
      }, [])

    useEffect(() => {
        fetch("https://api.datamuse.com/words?rel_rhy=" + starterWord.word)
        .then(response => response.json())
        .then(data => setRhymeWordsList(data))
    }, [starterWord]);

    const fetchPlayers = () => {
        fetch("http://localhost:8080/api/players/")
        .then(response => response.json())
        .then(data => setPlayers(data))
      }

    const fetchStarterWordsList = () => {
        fetch("http://localhost:8080/api/starter_words/")
        .then(response => response.json())
        .then(data => setStarterWordsList(data))
        .then(console.log(starterWordsList))
      }
    
    const starterWordClicked = (e) => {
        let index = e.target.value;
        let selectedWord = starterWordsList[index];
        let newWord = {...starterWord}
        newWord['word'] = selectedWord['word']
        newWord['wordClass'] = selectedWord['wordClass']
        setStarterWord(newWord)
        setShowResult(false)
        setShowRhymes(true)

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
        console.log(starterWord)
        setRhymeWord(stateWord);
        setRhymeWordsList(reducedWordsList)
        setShowResult(true);
    }

  const handlePost = (player) => {
    const request = new Request();
    const url = "http://localhost:8080/api/players"
    request.post(url, player)
    // window.location.reload()
    console.log(players)
}

  


    return(
        <>
        <StarterWordsList starterWordsList={starterWordsList} starterWordClicked={starterWordClicked}/>
        {showRhymes ? <RhymeList rhymeWordsList={rhymeWordsList} rhymeWordClicked={rhymeWordClicked} showResult={showResult}/> : null}
        {showResult ? <p>Your words are {starterWord.word} and {rhymeWord.word}! Your score is {rhymeWord.score}!</p> : null}
        <PlayerForm onCreate={handlePost}/>
        </>
    )

}

export default GameContainer;