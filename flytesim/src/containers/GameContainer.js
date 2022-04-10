


import NewGame from '../components/NewGame';
import PlayerForm from '../components/PlayerForm';
import LineOneInput from '../components/LineOneInput';
import LineTwoInput from '../components/LineTwoInput';
import Request from '../helpers/request';
import { dictionary } from 'cmu-pronouncing-dictionary'

import React, { Fragment, useState, useEffect } from "react";
import StarterWordsList from "../components/StarterWordsList";
import RhymeList from "../components/RhymeList";
import perfect from "../img/Perfect.png";
import great from "../img/Great.png";
import okay from "../img/OK.png";
import Speech from 'react-speech';
import styled from "styled-components"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const GameContainer = () => {
    // const test = ["hello", "world"]
    // const [testing, setTesting] = useState([])


    const [players, setPlayers] = useState([])
    const [starterWordsList, setStarterWordsList] = useState([])
    const [rhymeWordsList, setRhymeWordsList] = useState([])

    const [soloPlayer, setSoloPlayer] = useState({})
    const [playerOne, setPlayerOne] = useState({})
    const [playerTwo, setPlayerTwo] = useState({})

    const [starterWord, setStarterWord] = useState({})
    const [rhymeWord, setRhymeWord] = useState({})

    const [lineOne, setLineOne] = useState("")
    const [lineTwo, setLineTwo] = useState("")
    
    const [showNewGame, setShowNewGame] = useState(true)
    const [showNewPlayerForm, setShowNewPlayerForm] = useState(false)
    const [showStarterWords, setShowStarterWords] = useState(false)
    const [showLineOneInput, setShowOneLineInput] = useState(false)
    const [showLineTwoInput, setShowTwoLineInput] = useState(false)
    const [showRhymes, setShowRhymes] = useState(false)
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        fetchStarterWordsList()
        fetchPlayers()
        console.log(dictionary["hello"])
        setLineOne("test")
      }, [])

  useEffect(() => {
    fetch("https://api.datamuse.com/words?rel_rhy=" + starterWord.word)
      .then((response) => response.json())
      .then((data) => setRhymeWordsList(data));
  }, [starterWord]);


    const fetchPlayers = () => {
        fetch("http://localhost:8080/api/players/")
        .then(response => response.json())
        .then(data => setPlayers(data))
        .then(console.log(players))
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
        setShowStarterWords(false)
        setShowOneLineInput(true)
    }

  const rhymeWordClicked = (e) => {
    // const filteredWordsList = rhymeWordsList.filter(word => word.numSyllables === 1);
    const reducedWordsList = rhymeWordsList.slice(0, 10);
    let index = e.target.value;
    let selectedWord = rhymeWordsList[index];
    let stateWord = { ...rhymeWord };
    stateWord["score"] = selectedWord["score"];
    stateWord["word"] = selectedWord["word"];
    console.log(stateWord);
    console.log(starterWord);
    setRhymeWord(stateWord);
    setRhymeWordsList(reducedWordsList);
    setShowRhymes(false)
    setShowTwoLineInput(true)
  };


  const interpretScore = () => {
    if (rhymeWord.score > 0 && rhymeWord.score < 1000) {
      return <img className="perfect" src={perfect} alt="perfect" />
    } else if (rhymeWord.score >= 1000 && rhymeWord.score < 1500) {
      return <img className="great" src={great} alt="great" />;
    } else {
      return <img className="okay" src={okay} alt="okay" />;
    }
  };

  const textToSpeech = () => {
      return `${lineOne} ${lineTwo}`;
  }

  const handlePlayerPost = (player) => {
    const request = new Request();
    const url = "http://localhost:8080/api/players"
    request.post(url, player)
    window.location.reload()
    console.log(players)
}

const handleLineOneSubmit = (e) => {
  e.preventDefault()
  setLineOne(e.target.value)
  let completeLine = (lineOne + " " + starterWord.word)
  setLineOne(completeLine)
  setShowOneLineInput(false)
  setShowRhymes(true)
}

const handleLineTwoSubmit = (e) => {
  e.preventDefault()
  setLineTwo(e.target.value)
  let completeLine = (lineTwo + " " + rhymeWord.word)
  setLineTwo(completeLine)
  setShowTwoLineInput(false)
  setShowResult(true)
  console.log(lineTwo)
}


const handleCreateNewPlayerSubmit = (event) => {
  event.preventDefault()
  setShowNewGame(false)
  setShowNewPlayerForm(true)
}

const handleNewRoundSubmit = (event) => {
  event.preventDefault()
  setShowResult(false)
  setShowNewGame(true)
}


    return(
        <>
        {showNewGame ? 
        <NewGame players={players} currentPlayer={soloPlayer} setCurrentPlayer={setSoloPlayer} setShowNewGame={setShowNewGame} setShowStarterWords={setShowStarterWords} handleCreateNewPlayerSubmit={handleCreateNewPlayerSubmit}/> 
        : null}
        
        {showNewPlayerForm ? 
        <PlayerForm onCreate={handlePlayerPost} /> 
        : null}
        
        {showStarterWords ? 
        <>
        <h3>{soloPlayer.stageName}, select your starter word!</h3>
        <StarterWordsList starterWordsList={starterWordsList} starterWordClicked={starterWordClicked} currentPlayer={soloPlayer.stageName}/> 
        </>
        : null}
        
        {showLineOneInput ? 
        <>
        <h3>{soloPlayer.stageName}, your first rhyme word is {starterWord.word}!</h3>
        <h3>Now complete line one!</h3>
        <LineOneInput lineOne={lineOne} setLineOne={setLineOne} handleLineOneSubmit={handleLineOneSubmit}/>
        <ul>{starterWord.word}</ul>
        </>
        : null}
        
        {showRhymes ? 
        <>
        <h3>{soloPlayer.stageName}, your first line is {lineOne}</h3>
        <h3>Now select your rhyme word!</h3>
        <RhymeList rhymeWordsList={rhymeWordsList} rhymeWordClicked={rhymeWordClicked} showResult={showResult}/> 
        </>
        : null}
        
        {showLineTwoInput? 
        <>
        <h3>{soloPlayer.stageName}, your first line is {lineOne}</h3>
        <h3>Your second rhyme word is {rhymeWord.word}.</h3>
        <h3>Now complete line two!</h3>
        <LineTwoInput lineTwo={lineTwo} setLineTwo={setLineTwo} handleLineTwoSubmit={handleLineTwoSubmit}/>
        <ul>{rhymeWord.word}</ul>
        </>
        : null}
        
        {showResult ? 
        <>
        <p>{soloPlayer.stageName}, your couplet is:</p>
        <p>{lineOne}</p>
        <p>{lineTwo}</p>
        <br/>
        <p>Your score is {rhymeWord.score}!</p> 
        <button onClick={handleNewRoundSubmit}>Play another round?</button>
        <button>Save round to database?</button>
        <Speech
textAsButton={true}    
displayText="Rap!" 
text={textToSpeech()}/>
          <div className="stage2">
          <div class="box bounce-7">{interpretScore()} </div>         
            </div>
        </>
        : null}
        
        
       
        
        
        </>
    )
};


export default GameContainer;

